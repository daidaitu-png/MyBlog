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
const AreaItem = (props, ref) => {
	const { index, item, removeItemFromChildren, changeChildrenItem } = props;
	const [isModalVisibal, setIsModalVisibal] = useState(false);

	// const [schema, setSchema] = useState(item);
	const [schema, setSchema] = useState(item);

	const showModal = () => {
		setIsModalVisibal(true);
	};
	const handleOk = () => {
		setIsModalVisibal(false);
		// changeChildrenItem(index, schema);
	};

	useImperativeHandle(ref, () => {
		return {
      getSchema:()=>{
        return schema
      }
    };
	});

	const handleCancel = () => {
		setSchema(item);
		setIsModalVisibal(false);
	};

	const handleSelectorChange = (value) => {
		const schema = {
			name: value,
			attributes: {},
			children: [],
		};
		setSchema(schema);
	};

	return (
		<li className={styles.item}>
			<span className={styles.content} onClick={showModal}>
				当前区块为空
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
						value={schema.name}
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
