import { Input, Button, Modal, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { SortableElement } from "react-sortable-hoc";
import React, { useState } from "react";
import styles from "./style.module.scss";
import {
	getChangePageChildAction,
	getDeletePageChildAction,
} from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_PAGE_CHILD } from "../../store/constant";

const { Option } = Select;

const useStore = (index) => {
	const dispatch = useDispatch();
	const pageChild = useSelector((state) => {
		return state.homeManagement.schema?.children?.[index] || {};
	});

	const changePageChild = (tempPageChild) => {
		dispatch(getChangePageChildAction(index, tempPageChild));
	};

	const removePageChild = () => {
		dispatch(getChangePageChildAction(index));
	};

	return { pageChild, changePageChild, removePageChild };
};

// const SELECT_OPTIONS = {
// 	Banner: "Bannner Comp",
// 	List: "List Comp",
// 	Footer: "Footer Comp",
// };

const AreaItem = (props) => {
	const { value: index } = props;

	const { pageChild, changePageChild, removePageChild } = useStore(index);

	const [isModalVisibal, setIsModalVisibal] = useState(false);
	// const dispatch = useDispatch();
	const [tempPageChild, setTempPageChild] = useState(pageChild);

	const showModal = () => {
		setIsModalVisibal(true);
	};
	const handleOk = () => {
		setIsModalVisibal(false);
		changePageChild(tempPageChild);
	};

	const handleCancel = () => {
		setIsModalVisibal(false);
		setTempPageChild(pageChild);
	};

	const handleSelectorChange = (value) => {
		const newSchema = {
			name: value,
			attributes: {},
			children: [],
		};
		setTempPageChild(newSchema);
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
				</Modal>
			</span>
		</li>
	);
};

export default SortableElement(AreaItem);
