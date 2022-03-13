import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "antd";
import styles from "./style.module.scss";
import {
	getChangeSchemaAction,
	getChangePageAttributeAction,
} from "./../../store/action";

const useStore = () => {
	const dispatch = useDispatch();
	const schema = useSelector((state) => {
		return state.common.schema;
	});
	const changeSchema = (schema) => {
		dispatch(getChangeSchemaAction(schema));
	};
	const changePageAttribute = (key, value) => {
		const action = getChangePageAttributeAction(key, value);
		dispatch(action);
	};
	return { schema, changeSchema, changePageAttribute };
};

const BasicSetting = () => {
	const { schema = {}, changeSchema, changePageAttribute } = useStore();
	const { attributes = {} } = schema;
	const { title = "" } = attributes;

	const handleSaveBtnClick = () => {
		const schemaStr = JSON.stringify(schema);
		window.localStorage.schema = schemaStr;
	};

	const handleResetBtnClick = () => {
		changeSchema(JSON.parse(window.localStorage.schema));
	};
	const handleTitleChange = useCallback(
		(e) => {
			changePageAttribute("title", e.target.value);
		},
		[changePageAttribute]
	);

	return (
		<>
			<div className={styles.row}>
				<div className={styles.title}>page title:</div>
				<div className={styles.content}>
					<Input value={title} onChange={handleTitleChange} />
				</div>
			</div>
			<div className={styles.buttons}>
				<Button type="primary" onClick={handleSaveBtnClick}>
					保存基础配置
				</Button>
				<Button
					type="primary"
					className={styles.reset}
					onClick={handleResetBtnClick}
				>
					重置基础配置
				</Button>
			</div>
		</>
	);
};

export default BasicSetting;
