import CopyWebpackPlugin from "copy-webpack-plugin";
import path              from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { webpack, isServer }) => {
		if(isServer) return config;
		config.plugins.push(
			new CopyWebpackPlugin({
				patterns: [{
					from: path.join(__dirname, "node_modules/cesium/Build/Cesium/Workers"),
					to  : path.join(__dirname, "public/Cesium/Workers"),
				}, {
					from: path.join(__dirname, "node_modules/cesium/Source/Assets"),
					to  : path.join(__dirname, "public/Cesium/Assets"),
				}, {
					from: path.join(__dirname, "node_modules/cesium/Source/Widgets"),
					to  : path.join(__dirname, "public/Cesium/Widgets"),
				}, {
					from: path.join(__dirname, "node_modules/cesium/Source/ThirdParty"),
					to  : path.join(__dirname, "public/Cesium/ThirdParty"),
				}],
			}),
			new webpack.DefinePlugin({
				CESIUM_BASE_URL: JSON.stringify("/Cesium")
			})
		);
		return config;
	}
};

export default nextConfig;
