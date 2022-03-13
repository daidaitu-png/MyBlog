import { Input, Button } from "antd";
import React from "react";
import styles from "./style.module.scss";
import { cloneDeep } from "lodash";


const Footer = (props) => {
	const {
		attributes = {},
		changeAttributes,
		children = [],
		changeChildren,
	} = props;
	const { copyright, record } = attributes;
	const addItemToChildren = () => {
		const newChildren = [...children];
		newChildren.push({
			name: "Item",
			attributes: {
				title: "",
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
			<div className={styles['attribute-row']}>
				<span className={styles.label}>版权信息</span>
				<Input
					className={styles.content}
					onChange={(e) => {
						changeAttributes({ copyright: e.target.value });
					}}
					placeholder="please add page copyright"
					value={copyright}
				/>
			</div>
			<div className={styles['attribute-row']}>
				<span className={styles.label}>备案信息</span>
				<Input
					className={styles.content}
					onChange={(e) => {
						changeAttributes({ record: e.target.value });
					}}
					placeholder="please add 备案信息"
					value={record}
				/>
			</div>
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
					<div className={styles['area-row']}>
						<span className={styles.label}>标题</span>
						<Input
							className={styles.content}
							onChange={(e) => {
								changeChildrenItem(index, "title", e.target.value);
							}}
							placeholder="please add page title"
							value={attributes?.title}
						/>
					</div>
					<div className={styles['area-row']}>
						<span className={styles.label}>链接</span>
						<Input
							className={styles.content}
							onChange={(e) => {
								changeChildrenItem(index, "link", e.target.value);
							}}
							placeholder="please add 链接"
							value={attributes?.link}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Footer;
