/*
 * =======================
 * 좌표 관련 유틸 함수들 제공
 * =======================
 */

import { getCamera, getEllipsoid, getViewer } from "@utils/cesium/viewerUtils.js";
import * as Cesium                            from 'cesium';

/**
 * Cartesian3 좌표를 지표면 상의 좌표로 변환한 후 변환
 * @param cartesian3 {module:cesium.Cartesian3}
 * @returns {module:cesium.Cartesian3}
 */
export function cartesianToGroundCartesian3(cartesian3) {
	const ellipsoid = getEllipsoid();
	const cartographic = Cesium.Cartographic.fromCartesian(cartesian3, ellipsoid);
	return Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0, ellipsoid);
}

/**
 * GET Window Position Ray
 * @param windowPosition {module:cesium.Cartesian2}
 * @returns {module:cesium.Ray}
 */
export function getPickRay(windowPosition) {
	return getCamera().getPickRay(windowPosition);
}

/**
 * window position(x, y) to Cartesian3
 * @param windowPosition {module:cesium.Cartesian2}
 * @returns {module:cesium.Cartesian3}
 */
export function windowPositionToCartesian3(windowPosition) {
	const viewer = getViewer();
	const ray = getPickRay(windowPosition);
	return viewer.scene.globe.pick(ray, viewer.scene);
}

/**
 * window position(x, y) to Cartesian3 from Cartographic which height is 0
 * @param windowPosition {module:cesium.Cartesian2}
 * @returns {module:cesium.Cartesian3}
 */
export function windowPositionToGroundCartesian3(windowPosition) {
	const windowCartesian3 = windowPositionToCartesian3(windowPosition);
	return cartesianToGroundCartesian3(windowCartesian3);
}

/**
 * window position on a center to Cartesian3
 * @param outerWidth {number}
 * @param outerHeight {number}
 * @returns {module:cesium.Cartesian3}
 */
export function windowCenterToCartesian3(outerWidth, outerHeight) {
	return windowPositionToCartesian3(new Cesium.Cartesian2(outerWidth, outerHeight));
}

/**
 * window position on a center to Cartesian3 from Cartographic which height is 0
 * @param outerWidth {number}
 * @param outerHeight {number}
 * @returns {module:cesium.Cartesian3}
 */
export function windowCenterToGroundCartesian3(outerWidth, outerHeight) {
	const centerCartesian3 = windowCenterToCartesian3(outerWidth, outerHeight);
	return cartesianToGroundCartesian3(centerCartesian3);
}

/**
 * 카메라 이동 시 좌표 수정
 * @param callback {function({longitude: number, latitude: number, height: number})}
 */
export function setCoordRenderHandler(callback) {
	const camera = getCamera();

	camera.changed.addEventListener(() => {
		const clientWidth = window.innerWidth;
		const clientHeight = window.innerHeight;
		const centerCartesian3 = windowCenterToGroundCartesian3(clientWidth, clientHeight);
		const centerCartographic = Cesium.Cartographic.fromCartesian(centerCartesian3, getEllipsoid());

		callback({
			longitude: Cesium.Math.toDegrees(centerCartographic.longitude),
			latitude : Cesium.Math.toDegrees(centerCartographic.latitude),
			height   : camera.positionCartographic.height,
		});
	});
}