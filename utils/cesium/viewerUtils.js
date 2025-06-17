import * as Cesium from "cesium";

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

const KOREA_EXTENT = {
	EAST : 131.8783,
	WEST : 124.1833,
	SOUTH: 33.1111,
	NORTH: 43.0083,
};

/**
 * @param containerId {Element | string}
 * @param options {module:cesium.Viewer.ConstructorOptions?}
 */
export async function createCesiumViewer(containerId = "cesiumContainer", options) {

	Cesium.Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_ACCESSTOKEN;
	Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(KOREA_EXTENT.WEST, KOREA_EXTENT.SOUTH, KOREA_EXTENT.EAST, KOREA_EXTENT.NORTH);

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

export function moveCameraDefaultRectangle() {
	camera.flyTo({
		destination: Cesium.Camera.DEFAULT_VIEW_RECTANGLE,
		duration   : 0.5,
	});
}

export function setViewerEventHandler() {
	document.addEventListener('keypress', (e) => {
		switch(e.key) {
			case 'v':
				console.log(viewer);
				break;
			case 'c':
				console.log(camera);
				break;
			default:
				break;
		}
	});
}