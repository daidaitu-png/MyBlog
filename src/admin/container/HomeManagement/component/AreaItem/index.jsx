import { Input, Button, Modal, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, {
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from "react";
import styles from "./style.module.scss";

const { Option } = Select;

const SELECT_OPTIONS = {
	Banner: "Bannner Comp",
	List: "List Comp",
	Footer: "Footer Comp",
};

// let prevSchema = {};

const AreaItem = (props, ref) => {
	const { index, item, removeItemFromChildren, changeChildrenItem,changeAreaItem } = props;
	const [isModalVisibal, setIsModalVisibal] = useState(false);

	// const [schema, setSchema] = useState(item);
	const [schema, setSchema] = useState(item);
  const [temp, setTemp] = useState(item);

  useEffect(()=>{
    setSchema(props.item)
    setTemp(props.item)
  },[props.item])

	const showModal = () => {
		setIsModalVisibal(true);
	};
	const handleOk = () => {
		setIsModalVisibal(false);
		// changeChildrenItem(index, schema);
		// prevSchema = {};
    setSchema(temp)
    changeAreaItem(index,temp)
	};

	useImperativeHandle(ref, () => {
		return {
			getSchema: () => {
				return schema;
			},
			// resetSchema: () => {
			// 	setSchema(item);
			// 	// prevSchema = {};
			// },
		};
	});

	const handleCancel = () => {
		// setSchema(prevSchema);
		setIsModalVisibal(false);
    setTemp(schema)
		// prevSchema = {};
	};

	const handleSelectorChange = (value) => {
		// prevSchema = { ...schema };
		const newSchema = {
			name: value,
			attributes: {},
			children: [],
		};
		setTemp(newSchema);
	};

	return (
		<li className={styles.item}>
			<span className={styles.content} onClick={showModal}>
				{schema.name ? schema.name + " 组件" : "当前区块内容为空"}
			</span>
			<span className={styles.delete}>
				<Button
					onClick={() => removeItemFromChildren(index)}
					type="dashed"
					size="small"
					danger
				>
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
						{/* {Object.values(SELECT_OPTIONS).map((item, index) => (
							<Option value={index}>{item}</Option>
						))} */}
						<Option value="Bannner">Bannner Comp</Option>
						<Option value="List">List Comp</Option>
						<Option value="Footer">Footer Comp</Option>
					</Select>
				</Modal>
			</span>
		</li>
	);
};

export default forwardRef(AreaItem);
