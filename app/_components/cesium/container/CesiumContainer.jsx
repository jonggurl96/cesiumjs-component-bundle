'use client';

import { moveKoreaExtentRectangle }                  from "@utils/cesium/coord/extentUtils.js";
import { createCesiumViewer, setViewerEventHandler } from "@utils/cesium/viewerUtils.js";
import React, { useEffect, useState }                from 'react';
import "./CesiumContainer.css";

const cesiumContainerId = "cesiumContainer";

export default function CesiumContainer() {

	const [cesiumViewerLoaded, setCesiumViewerLoaded] = useState(false);

	useEffect(() => {
		if(cesiumViewerLoaded) return;
		createCesiumViewer(cesiumContainerId)
			.then(() => {
				setViewerEventHandler();
				moveKoreaExtentRectangle();
				setCesiumViewerLoaded(true);
			});
	}, [cesiumViewerLoaded]);

	return (
		<div id={cesiumContainerId} style={{
			position: "fixed",
			top     : 0,
			left    : 0,
			width   : "100vw",
			height  : "100vh",
		}}></div>
	);
}
