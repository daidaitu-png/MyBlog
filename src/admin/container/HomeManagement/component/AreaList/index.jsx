import { Button } from "antd";
import React, { useState, useEffect, useMemo } from "react";
import AreaItem from "../AreaItem";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAddPageChildrenAction } from "../../store/action";

const AreaList = (props) => {
	const children = useSelector((state) => {
		return state.homeManagement.schema?.children || [];
	});
	const dispatch = useDispatch();

	const addPageChildren = () => {
    dispatch(getAddPageChildrenAction())
  };

	return (
		<div>
			<ul className={styles.list}>
				{children?.map((item, index) => (
					<AreaItem index={index} key={index} />
				))}
			</ul>
			<Button type="primary" ghost onClick={addPageChildren}>
				新增页面区块
			</Button>
		</div>
	);
};

export default AreaList;
