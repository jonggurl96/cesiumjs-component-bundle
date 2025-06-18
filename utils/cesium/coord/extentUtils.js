/**
 * @typedef {Object} extent
 * @property west {number}
 * @property south {number}
 * @property east {number}
 * @property north {number}
 */

import { getCamera } from "@utils/cesium/viewerUtils.js";
import * as Cesium   from "cesium";

/**
 * 대한민국 지도 경계 좌표
 * @type {extent}
 */
export const KOREA_EXTENT = {
	west : 124.1833,
	south: 33.1111,
	east : 131.8783,
	north: 43.0083,
};

/**
 * 카메라 초기화 경계 좌표
 * @type {extent}
 */
export const CAMERA_EXTENT = KOREA_EXTENT;

/**
 * 카메라 초기화 경계 좌표 설정
 * @param extent {extent}
 */
export function setCameraExtent(extent) {
	CAMERA_EXTENT.west = extent.west;
	CAMERA_EXTENT.south = extent.south;
	CAMERA_EXTENT.east = extent.east;
	CAMERA_EXTENT.north = extent.north;
}

/**
 * 대한민국 경계 좌표 Rectangle
 * @returns {module:cesium.Rectangle}
 */
export function getKoreaExtentRectangle() {
	return Cesium.Rectangle.fromDegrees(KOREA_EXTENT.west, KOREA_EXTENT.south, KOREA_EXTENT.east, KOREA_EXTENT.north);
}

/**
 * 카메라 대한민국 좌표로 이동
 */
export function moveKoreaExtentRectangle() {
	getCamera().flyTo({
		destination: getKoreaExtentRectangle(),
		duration   : 0.5,
	});
}

/**
 * 카메라 초기화 경계 좌표 Rectangle
 * @returns {module:cesium.Rectangle}
 */
export function getCameraExtentRectangle() {
	return Cesium.Rectangle.fromDegrees(CAMERA_EXTENT.west, CAMERA_EXTENT.south, CAMERA_EXTENT.east, CAMERA_EXTENT.north);
}

/**
 * 카메라 초기화
 */
export function moveCameraExtentRectangle() {
	getCamera().flyTo({
		destination: getCameraExtentRectangle(),
		duration   : 0.5,
	});
}