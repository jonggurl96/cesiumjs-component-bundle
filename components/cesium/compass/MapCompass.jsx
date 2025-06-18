'use client';

import { rotateCompassByCamera }                   from "@utils/cesium/compass/compassUtils.js";
import { moveCameraExtentRectangle }               from "@utils/cesium/coord/extentUtils.js";
import React, { useCallback, useEffect, useState } from 'react';
import styles                                      from './MapCompass.module.css';

export default function MapCompass() {

	const [rotateZ, setRotateZ] = useState(0);

	const rotateCompass = useCallback(deg => {
		setRotateZ(deg);
	}, []);

	const compassClickHandler = useCallback(moveCameraExtentRectangle, []);

	useEffect(() => {
		rotateCompassByCamera(rotateCompass);
	}, [rotateCompass]);

	return (
		<div className={styles.compassContainer} onClick={compassClickHandler}>
			<div
				className={styles.compassSpinner}
				style={{ transform: `rotateZ(${rotateZ}deg)` }}></div>
		</div>
	);
}
