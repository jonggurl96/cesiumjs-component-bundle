import DarkmodeButton  from "@components/btns/darkmode/DarkmodeButton.jsx";
import CesiumContainer from "@app/_components/cesium/container/CesiumContainer.jsx";

export default function Home() {
	return (
		<>
			<CesiumContainer />
			<div style={{
				position: "fixed",
				top: "50%",
				left: "50%",
			}}><DarkmodeButton/></div>
		</>
	);
}
