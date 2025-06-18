import { getCamera } from "@utils/cesium/viewerUtils.js";
import * as Cesium   from 'cesium';

/**
 *
 * @param rotateCompass {function(number): void}
 */
export function rotateCompassByCamera(rotateCompass) {
	const camera = getCamera();

	camera.changed.addEventListener(() => {
		rotateCompass(Cesium.Math.toDegrees(camera.heading));
	});
}