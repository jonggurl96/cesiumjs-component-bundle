'use client';

import { rotateCompassByCamera }                   from "@utils/cesium/compass/compassUtils.js";
import { getCamera }                               from "@utils/cesium/viewerUtils.js";
import React, { useCallback, useEffect, useState } from 'react';
import styles                                      from './MapCompass.module.css';

export default function MapCompass() {

	const [rotateZ, setRotateZ] = useState(0);

	const rotateCompass = useCallback(deg => {
		setRotateZ(deg);
	}, []);

	useEffect(() => {
		rotateCompassByCamera(getCamera(), rotateCompass);
	}, [rotateCompass]);

	return (
		<div className={styles.compassContainer}>
			<div
				className={styles.compassSpinner}
				style={{ transform: `rotateZ(${rotateZ}deg)` }}></div>
		</div>
	);
}
