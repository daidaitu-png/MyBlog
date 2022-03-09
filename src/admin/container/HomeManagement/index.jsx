import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu, Button } from "antd";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import styles from "./style.module.scss";
import AreaList from "./component/AreaList";
import PageSetting from "./component/PageSetting";
import { getChangeSchemaAction } from "./store/action";

const { Header, Sider, Content } = Layout;

const useStore = () => {
	const dispatch = useDispatch();
	const schema = useSelector((state) => {
		return state.homeManagement.schema;
	});
	const changeSchema = (schema) => {
		dispatch(getChangeSchemaAction(schema));
	};
	return { schema, changeSchema };
};

const HomeManagement = () => {
	const [collapsed, setCollapsed] = useState(false);
	// const dispatch = useDispatch();
	const { schema, changeSchema } = useStore();

	// const schema = useSelector((state) => {
	// 	console.log(state);
	// 	return state.homeManagement.schema;
	// });

	const toggle = () => {
		setCollapsed(!collapsed);
	};
	const handleHomePageRedirect = () => {
		window.location.href = "/";
	};

	const handleSaveBtnClick = () => {
		const schemaStr = JSON.stringify(schema);
		window.localStorage.schema = schemaStr;
	};
	const handleResetBtnClick = () => {
		changeSchema(JSON.parse(window.localStorage.schema));
	};

	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
					<Menu.Item key="1" icon={<UserOutlined />}>
						首页内容管理
					</Menu.Item>
					<Menu.Item
						key="2"
						icon={<VideoCameraOutlined />}
						onClick={handleHomePageRedirect}
					>
						返回用户页面
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					{collapsed ? (
						<MenuUnfoldOutlined className={styles.trigger} onClick={toggle} />
					) : (
						<MenuFoldOutlined className={styles.trigger} onClick={toggle} />
					)}
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 1000,
					}}
				>
					<PageSetting />
					<AreaList children={schema.children || []} />
					<div className={styles.buttons}>
						<Button type="primary" onClick={handleSaveBtnClick}>
							保存区块配置
						</Button>
						<Button
							type="primary"
							className={styles.reset}
							onClick={handleResetBtnClick}
						>
							重置区块配置
						</Button>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default HomeManagement;
