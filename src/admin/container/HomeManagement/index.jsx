import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import styles from "./style.module.scss";
import AreaList from "./component/AreaList";
import { getChangeSchemaAction } from "../../store/action";

const useStore = () => {
	const dispatch = useDispatch();
	const schema = useSelector((state) => {
		return state.common.schema;
	});
	const changeSchema = (schema) => {
		dispatch(getChangeSchemaAction(schema));
	};
	return { schema, changeSchema };
};

const HomeManagement = () => {
	const { schema, changeSchema } = useStore();

	const handleSaveBtnClick = () => {
		const schemaStr = JSON.stringify(schema);
		window.localStorage.schema = schemaStr;
	};

	const handleResetBtnClick = () => {
		changeSchema(JSON.parse(window.localStorage.schema));
	};

	return (
		<div className={styles.itemsWrap}>
			<AreaList children={schema.children || []} />
			<div className={styles.buttons}>
				<Button type="primary" onClick={handleSaveBtnClick}>
					保存区块配置
				</Button>
				<Button
					type="primary"
					className={styles.reset}
					onClick={handleResetBtnClick}
				>
					重置区块配置
				</Button>
			</div>
		</div>
	);
};

export default HomeManagement;
