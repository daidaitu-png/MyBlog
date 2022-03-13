import { Input, Button, Modal, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { SortableElement } from "react-sortable-hoc";
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import {
	getChangePageChildAction,
	getDeletePageChildAction,
} from "../../../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_PAGE_CHILD } from "../../../../store/constant";
import Banner from "./component/Banner";
import { cloneDeep } from "lodash";
import List from "./component/List";
import Footer from "./component/Footer";

const { Option } = Select;

const useStore = (index) => {
	const dispatch = useDispatch();
	const pageChild = useSelector((state) => {
		return state.common.schema?.children?.[index] || {};
	});

	const changePageChild = (temp) => {
		dispatch(getChangePageChildAction(index, temp));
	};

	const removePageChild = () => {
		dispatch(getDeletePageChildAction(index));
	};

	return { pageChild, changePageChild, removePageChild };
};

const map = {
	Banner: Banner,
	List: List,
	Footer: Footer,
};

const AreaItem = (props) => {
	const { value: index } = props;
	const { pageChild, changePageChild, removePageChild } = useStore(index);
	const [isModalVisibal, setIsModalVisibal] = useState(false);
	// const dispatch = useDispatch();
	const [tempPageChild, setTempPageChild] = useState(cloneDeep(pageChild));

	useEffect(() => {
		setTempPageChild(cloneDeep(pageChild));
	}, [pageChild]);

	const showModal = () => {
		setIsModalVisibal(true);
	};
	const handleOk = () => {
		setIsModalVisibal(false);
		changePageChild(tempPageChild);
	};

	const handleCancel = () => {
		setIsModalVisibal(false);
		setTempPageChild(cloneDeep(pageChild));
	};

	const handleSelectorChange = (value) => {
		const newSchema = {
			name: value,
			attributes: {},
			children: [],
		};
		setTempPageChild(newSchema);
	};

	const changeTempPageChildAttributes = (kvObj) => {
		const newTempPageChild = { ...tempPageChild };
		for (const key in kvObj) {
			newTempPageChild.attributes[key] = kvObj[key];
		}

		setTempPageChild(newTempPageChild);
	};

	const changeTempPageChildChildren = (children) => {
		const newTempPageChild = { ...tempPageChild };
		newTempPageChild.children = children;
		setTempPageChild(newTempPageChild);
	};

	const getComponent = () => {
		const { name } = tempPageChild;
		console.log(tempPageChild);
		const Component = map[name];
		return Component ? (
			<Component
				{...tempPageChild}
				changeAttributes={changeTempPageChildAttributes}
				changeChildren={changeTempPageChildChildren}
			/>
		) : null;
	};

	return (
		<li className={styles.item}>
			<span className={styles.content} onClick={showModal}>
				{pageChild.name ? pageChild.name + " 组件" : "当前区块内容为空"}
			</span>
			<span className={styles.delete}>
				<Button onClick={removePageChild} type="dashed" size="small" danger>
					delete
				</Button>
				<Modal
					title="选择组件"
					visible={isModalVisibal}
					onOk={handleOk}
					onCancel={handleCancel}
					bodyStyle={{
						maxHeight: "500px",
						overflowY: "scroll",
					}}
				>
					<Select
						className={styles.selector}
						style={{ width: "100%" }}
						onChange={handleSelectorChange}
						value={tempPageChild.name}
					>
						<Option value="Banner">Banner Comp</Option>
						<Option value="List">List Comp</Option>
						<Option value="Footer">Footer Comp</Option>
					</Select>
					{getComponent()}
				</Modal>
			</span>
		</li>
	);
};

export default SortableElement(AreaItem);
