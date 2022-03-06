import { Button } from "antd";
import React, {
	useState,
	useEffect,
	useImperativeHandle,
	forwardRef,
} from "react";
import styles from "./style.module.scss";

// let listData = [];
// console.log("123", window.localStorage.homeData);

// try {
// 	listData = JSON.pasrse(window.JSON.stringify(window.localStorage.homeData))
// 	// listData = JSON.parse("[{},{},{},{},{}]");
// } catch (error) {}

const AreaList = (props, ref) => {
	const [list, setList] = useState([]);

	const [schema, setSchema] = useState({});

	useEffect(() => {
		setSchema(JSON.parse(window.localStorage.schema));
	}, []);
	// useEffect(() => {
	// 	setDesc(schema.children?.[0]?.attributes?.desc);
	// 	setTitle(schema.children?.[0]?.attributes?.title);
	// }, [schema]);

	useEffect(() => {
		// setList(
		// 	window.localStorage.homeData
		// 		? JSON.parse(window.localStorage.homeData)
		// 		: list
		// );
		setList(schema?.children?.splice(3));
	}, [schema]);

	const handleAddBtnClick = () => {
		const newList = [...list];
		newList.push({});
		setList(newList);
	};
	const handleDeleteBtnClick = (index) => {
		const newList = [...list];
		newList.splice(index, 1);
		setList(newList);
	};
	useImperativeHandle(ref, () => {
		return { list };
	});

	return (
		<div>
			<ul className={styles.list}>
				{list?.map((item, index) => (
					<li key={index} className={styles.item}>
						<span className={styles.content}>当前区块为空</span>
						<span className={styles.delete}>
							<Button
								onClick={() => handleDeleteBtnClick(index)}
								type="dashed"
								size="small"
								danger
							>
								delete
							</Button>
						</span>
					</li>
				))}
			</ul>
			<Button type="primary" ghost onClick={handleAddBtnClick}>
				新增页面区块
			</Button>
		</div>
	);
};

export default forwardRef(AreaList);
