import { Button } from "antd";
import React, { useState, useEffect, useMemo } from "react";
import AreaItem from "../AreaItem";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { SortableContainer } from "react-sortable-hoc";
import { getAddPageChildrenAction,getChangePageChildPositionAction } from "../../store/action";

const SortableList = SortableContainer(({ list }) => {
	return (
		<ul className={styles.list}>
			{list?.map((item, index) => (
				<AreaItem index={index} key={index} value={index} />
			))}
		</ul>
	);
});

const AreaList = (props) => {
	const children = useSelector((state) => {
		return state.homeManagement.schema?.children || [];
	});
	const dispatch = useDispatch();

	const addPageChildren = () => {
		dispatch(getAddPageChildrenAction());
	};

	const onSortEnd = ({oldIndex, newIndex}) => {
    dispatch(getChangePageChildPositionAction(oldIndex, newIndex))
  };

	return (
		<div>
			<SortableList lockAxis="y" distance={5}/*5的时候拖动，避免影响点击弹窗事件 */ list={children} onSortEnd={onSortEnd} />
			<Button type="primary" ghost onClick={addPageChildren}>
				新增页面区块
			</Button>
		</div>
	);
};

export default AreaList;
