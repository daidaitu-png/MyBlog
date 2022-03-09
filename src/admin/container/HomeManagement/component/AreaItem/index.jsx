import { Input, Button, Modal, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { getChangePageChildAction,getDeletePageChildAction } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

const SELECT_OPTIONS = {
	Banner: "Bannner Comp",
	List: "List Comp",
	Footer: "Footer Comp",
};

const AreaItem = (props) => {
	const { index } = props;
	const pageChild = useSelector((state) => {
		return state.homeManagement.schema?.children?.[index] || {};
	});
	const [isModalVisibal, setIsModalVisibal] = useState(false);
	const dispatch = useDispatch();
	const [temp, setTemp] = useState(pageChild);

	const showModal = () => {
		setIsModalVisibal(true);
	};
	const handleOk = () => {
		setIsModalVisibal(false);
		dispatch(getChangePageChildAction(index, temp));
	};

	const handleCancel = () => {
		setIsModalVisibal(false);
		setTemp(pageChild);
	};

	const handleSelectorChange = (value) => {
		const newSchema = {
			name: value,
			attributes: {},
			children: [],
		};
		setTemp(newSchema);
	};
  const removePageChild=()=>{
    dispatch(getDeletePageChildAction(index))
  }

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
						value={temp.name}
					>
						<Option value="Bannner">Bannner Comp</Option>
						<Option value="List">List Comp</Option>
						<Option value="Footer">Footer Comp</Option>
					</Select>
				</Modal>
			</span>
		</li>
	);
};

export default AreaItem;
