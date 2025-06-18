import { getKoreaExtentRectangle } from "@utils/cesium/coord/extentUtils.js";
import * as Cesium                 from "cesium";

/**
 * Cesium Viewer
 * @type {module:cesium.Viewer}
 */
let viewer;

/**
 * Cesium Viewer Camera
 * @type {module:cesium.Camera}
 */
let camera;

/**
 * Cesium Viewer Globe
 * @type {module:cesium.Globe}
 */
let globe;

/**
 * Cesium Viewer Ellipsoid
 * @type {module:cesium.Ellipsoid}
 */
let ellipsoid;

/**
 * Cesium Viewer 반환 함수
 * @returns {module:cesium.Viewer}
 */
export function getViewer() {
	return viewer;
}

/**
 * Cesium Viewer.Camera 반환 함수
 * @returns {module:cesium.Camera}
 */
export function getCamera() {
	return camera;
}

/**
 * Cesium Viewer.Scene.Globe 반환 함수
 * @returns {module:cesium.Globe}
 */
export function getGlobe() {
	return globe;
}

/**
 * Cesium Viewer.Scene.Globe.Ellipsoid 반환 함수
 * @returns {module:cesium.Ellipsoid}
 */
export function getEllipsoid() {
	return ellipsoid;
}

/**
 * @param containerId {Element | string}
 * @param options {module:cesium.Viewer.ConstructorOptions?}
 */
export async function createCesiumViewer(containerId = "cesiumContainer", options) {

	Cesium.Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_ACCESSTOKEN;
	Cesium.Camera.DEFAULT_VIEW_RECTANGLE = getKoreaExtentRectangle();

	viewer = new Cesium.Viewer(containerId, Object.assign({
		useDefaultRenderLoop                  : true,
		baseLayerPicker                       : false,
		animation                             : false,
		shouldAnimate                         : true,
		fullscreenButton                      : false,
		geocoder                              : false,
		homeButton                            : false,
		infoBox                               : false,
		sceneModePicker                       : false,
		selectionIndicator                    : false,
		timeline                              : false,
		navigationHelpButton                  : false,
		navigationInstructionsInitiallyVisible: false,
		terrainShadows                        : Cesium.ShadowMode.ENABLED,
		shadows                               : false,
		contextOptions                        : {
			webgl: {
				alpha                       : true,
				antialias                   : true,
				preserveDrawingBuffer       : true,
				failIfMajorPerformanceCaveat: false,
				depth                       : true,
				stencil                     : true
			},
		},
		orderIndependentTranslucency          : false,
		requestRenderMode                     : true, // Explicit Rendering Mode 사용으로 필요할 때만 렌더링을 수행하여 CPU와 GPU 사용량을 줄임
	}, options));

	camera = viewer.camera;

	globe = viewer.scene.globe;

	ellipsoid = globe.ellipsoid;
}

export function setViewerEventHandler() {
	document.addEventListener('keypress', (e) => {
		switch(e.key) {
			case 'c':
				console.log(camera);
				break;
			case 'e':
				console.log(viewer.entities);
				break;
			case 'v':
				console.log(viewer);
				break;
			default:
				break;
		}
	});
}
