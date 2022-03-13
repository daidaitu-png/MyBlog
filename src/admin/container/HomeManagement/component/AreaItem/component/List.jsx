import { Input, Button } from "antd";
import React from "react";
import styles from "./style.module.scss";
import { cloneDeep } from "lodash";
import TextArea from "antd/lib/input/TextArea";

const List = (props) => {
	const { children = [], changeAttributes, changeChildren } = props;
	const addItemToChildren = () => {
		const newChildren = [...children];
		newChildren.push({
			name: "Item",
			attributes: {
				title: "",
				description: "",
				imageUrl: "",
				link: "",
			},
			children: [],
		});
		changeChildren(newChildren);
	};
	const deleteItemFromChildren = (index) => {
		const newChildren = [...children];
		newChildren.splice(index, 1);
		changeChildren(newChildren);
	};

	const changeChildrenItem = (index, key, value) => {
		const originItem = children[index];
		const item = cloneDeep(originItem);
		!item.attributes && (item.attributes = {});
		item.attributes[key] = value;
		const newChildren = [...children];
		newChildren.splice(index, 1, item);
		changeChildren(newChildren);
	};

	return (
		<div className={styles.wrapper}>
			<Button
				type="primary"
				className={styles.button}
				onClick={addItemToChildren}
			>
				新增列表
			</Button>
			{children.map(({ attributes }, index) => (
				<div className={styles.area} key={index}>
					<div
						className={styles.delete}
						onClick={() => deleteItemFromChildren(index)}
					>
						x
					</div>
					<div className={styles['attribute-row']}>
						<span className={styles.label}>page title</span>
						<Input
							className={styles.content}
							onChange={(e) => {
								changeChildrenItem(index, "title", e.target.value);
							}}
							placeholder="please add page title"
							value={attributes?.title}
						/>
					</div>
					<div className={styles['attribute-row']}>
						<span className={styles.label}>描述</span>
						<TextArea
							className={styles.content}
							onChange={(e) => {
								changeChildrenItem(index, "description", e.target.value);
							}}
							placeholder="please add 描述"
							value={attributes?.description}
						/>
					</div>
					<div className={styles['attribute-row']}>
						<span className={styles.label}>图片</span>
						<Input
							className={styles.content}
							onChange={(e) => {
								changeChildrenItem(index, "imageUrl", e.target.value);
							}}
							placeholder="please add 图片地址"
							value={attributes?.imageUrl}
						/>
					</div>
					<div className={styles['attribute-row']}>
						<span className={styles.label}>链接</span>
						<Input
							className={styles.content}
							onChange={(e) => {
								changeChildrenItem(index, "link", e.target.value);
							}}
							placeholder="please add 跳转链接"
							value={attributes?.link}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default List;
