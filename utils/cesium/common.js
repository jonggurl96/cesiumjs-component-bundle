import * as Cesium    from "cesium";
import { noArgError } from "./error/arg/argumentError.js";

export class CesiumUtils {
	/**
	 * @constructor
	 * @param viewer {module:cesium.Viewer}
	 */
	constructor(viewer) {

		if(!viewer)
			throw new Error("CesiumUtils requires Cesium Viewer Non-Null.");

		/**
		 * @type {module:cesium.Viewer}
		 */
		this.viewer = viewer;

		/**
		 * <pre>
		 * - Key: 부여된 Datasource의 ID
		 * - Value: Datasource
		 * </pre>
		 * @type {Object.<string, module:cesium.DataSource>}
		 */
		this.dataSources = {};

		/**
		 * this.viewer에 등록된 모든 엔티티 리스트
		 * @type {module:cesium.Entity[]}
		 */
		this.entities = [];
	}

	/**
	 * dsName으로 CustomDataSource를 추가한 뒤 [dsName]_[중복된 이름의 CustomDataSource 갯수]를 키값으로 this.dataSources에 추가
	 * @param dsName{string}
	 */
	addDataSource(dsName) {
		const ds = new Cesium.CustomDataSource(dsName);
		this.viewer.dataSources.add(ds).then(ds => {
			const cnt = this.viewer.dataSources.getByName(dsName).length;
			this.dataSources[`${dsName}_${cnt}`] = ds;
		});
	}

	/**
	 * @example
	 *   return this.viewer.dataSources.getByName(dsName)[index - 1];
	 * @param dsName {string} CustomDataSource의 name (required)
	 * @param [index=1] {number} 중복된 dsName의 CustomDataSource 중의 index
	 * @returns {module:cesium.DataSource}
	 */
	getDataSource(dsName, index = 1) {
		if(!dsName) noArgError("dsName");
		return this.dataSources[`${dsName}_${index}`];
	}

	/**
	 * this.viewer에 등록된 엔티티 중 id를 갖는 엔티티 포함 여부 확인
	 * @param id {string} Entity ID (required)
	 * @returns {boolean}
	 */
	containsEntity(id) {
		return !!this.getEntity(id);
	}

	/**
	 * this.viewer에 등록된 엔티티 중 id를 갖는 엔티티 return
	 * @param id {string} Entity ID (required)
	 * @returns {module:cesium.Entity}
	 */
	getEntity(id) {
		if(!id) noArgError("id");
		return this.entities.find(entity => entity.id === id);
	}

	/**
	 * 새로운 엔티티를 만들고 this.dataSources와 this.entities에 추가
	 * @param entityOptions {module:cesium.Entity.ConstructorOptions} Entity 생성자 객체 (required)
	 * @param dsName {string} CustomDataSource의 name (required)
	 * @param [index=1] {number} 중복된 dsName의 CustomDataSource 중의 index
	 */
	addEntity(entityOptions, dsName, index = 1) {
		if(!entityOptions) noArgError("entityOptions");
		if(!dsName) noArgError("dsName");
		const entity = this.getDataSource(dsName, index).entities.add(entityOptions);
		this.entities.push(entity);
	}
}
