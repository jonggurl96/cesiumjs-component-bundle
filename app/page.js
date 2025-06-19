import MaskFullScreen  from "@app/_components/mask/transparent/MaskFullScreen.jsx";
import DarkmodeButton  from "@components/btns/darkmode/DarkmodeButton.jsx";
import CesiumContainer from "@app/_components/cesium/container/CesiumContainer.jsx";
import MapCompass      from "@components/cesium/compass/MapCompass.jsx";
import MapScale        from "@components/cesium/scale/MapScale.jsx";

export default function Home() {
	return (
		<>
			<CesiumContainer />

			<MaskFullScreen>
				<div style={{
					position: "fixed",
					top     : "50%",
					left    : "50%",
				}}>
					<DarkmodeButton />
				</div>

				<MapCompass />

				<MapScale />
			</MaskFullScreen>
		</>
	);
}
