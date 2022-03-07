import { Button } from "antd";
import React, {
	useState,
	useEffect,
	useImperativeHandle,
	forwardRef,
	createRef,
	useMemo,
} from "react";
import AreaItem from "../AreaItem";
import styles from "./style.module.scss";

// let listData = [];
// console.log("123", window.localStorage.homeData);

// try {
// 	listData = JSON.pasrse(window.JSON.stringify(window.localStorage.homeData))
// 	// listData = JSON.parse("[{},{},{},{},{}]");
// } catch (error) {}

let refs = [];

const AreaList = (props, ref) => {
	const [list, setList] = useState(props.children);
	console.log(props.children);
	console.log(list);

	useMemo(() => {
		refs = list.map((item) => createRef());
	}, [list]);

	// const [schema, setSchema] = useState({});

	// useEffect(() => {
	// 	setSchema(JSON.parse(window.localStorage.schema));
	// }, []);
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
		// setList(schema?.children?.splice(3));
		setList(window.localStorage.schema?JSON.parse(window.localStorage.schema)?.children:list);
	}, []);

	const addItemToChildren = () => {
		const newList = [...list];
		newList.push({});
		setList(newList);
	};
	const removeItemFromChildren = (index) => {
		const newList = [...list];
		newList.splice(index, 1);
		setList(newList);
	};
	useImperativeHandle(ref, () => {
		// return { children: list };
		return {
			getSchema: () => {
				const schema = [];
				list.forEach((item, index) => {
					schema.push(refs[index].current.getSchema());
				});
				return schema;
			},
		};
	});

	const changeChildrenItem = (index, child) => {
		const newList = [...list];
		newList.splice(index, 1, child);
		setList(newList);
	};

	return (
		<div>
			<ul className={styles.list}>
				{list?.map((item, index) => (
					<AreaItem
						index={index}
						item={item}
						removeItemFromChildren={removeItemFromChildren}
						key={index}
						changeChildrenItem={changeChildrenItem}
						ref={refs[index]}
					/>
				))}
			</ul>
			<Button type="primary" ghost onClick={addItemToChildren}>
				新增页面区块
			</Button>
		</div>
	);
};

export default forwardRef(AreaList);
