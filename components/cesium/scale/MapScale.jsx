'use client';

import { setCoordRenderHandler }                            from "@utils/cesium/coord/coordUtils.js";
import React, { useCallback, useEffect, useMemo, useState } from 'react';

export default function MapScale() {

	// 중심 경도
	const [longitude, setLongitude] = useState(0);

	// 중심 위도
	const [latitude, setLatitude] = useState(0);

	// 카메라 고도
	const [height, setHeight] = useState(0);

	const text = useMemo(() => `위도: ${latitude}° 경도: ${longitude}° 고도: ${height}m`, [latitude, longitude, height]);

	const setCoord = useCallback(({ longitude, latitude, height }) => {
		setLongitude(longitude);
		setLatitude(latitude);
		setHeight(height);
	}, []);

	useEffect(() => {
		setCoordRenderHandler(setCoord);
	}, [setCoord]);

	return (
		<div style={{
			position: 'fixed',
			bottom  : 10,
			right   : 10,
		}}>{text}</div>
	);
}
