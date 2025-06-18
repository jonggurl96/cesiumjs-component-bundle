import * as Cesium from 'cesium';

/**
 *
 * @param camera {module:cesium.Camera}
 * @param rotateCompass {function(number): void}
 */
export function rotateCompassByCamera(camera, rotateCompass) {

	camera.changed.addEventListener(() => {
		rotateCompass(Cesium.Math.toDegrees(camera.heading));
	});

}