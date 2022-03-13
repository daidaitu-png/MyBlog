import React, { useState } from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "antd/dist/antd.css";
import HomeManagement from "./container/HomeManagement";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Layout, Menu, Button } from "antd";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import styles from "./style.module.scss";

import store from "./store";
import BasicSetting from "./container/BasicSetting";
const { Header, Sider, Content } = Layout;

const Wrapper = () => {
	const [collapsed, setCollapsed] = useState(false);

	const handleHomePageRedirect = () => {
		window.location.href = "/";
	};

	const toggle = () => {
		setCollapsed(!collapsed);
	};
	return (
		<Router>
			<Layout>
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
						<Menu.Item key="admin-home" icon={<UserOutlined />}>
							<Link to="/">首页内容管理</Link>
						</Menu.Item>
						<Menu.Item key="admin-setting" icon={<UserOutlined />}>
							<Link to="/setting">基础内容配置</Link>
						</Menu.Item>
						<Menu.Item
							key="admin-back"
							icon={<VideoCameraOutlined />}
							onClick={handleHomePageRedirect}
						>
							返回用户页面
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header className={styles.header} style={{ padding: 0 }}>
						{collapsed ? (
							<MenuUnfoldOutlined className={styles.trigger} onClick={toggle} />
						) : (
							<MenuFoldOutlined className={styles.trigger} onClick={toggle} />
						)}
					</Header>
					<Content className={styles.content}>
						<Switch>
							<Route path="/" component={HomeManagement} exact />
							<Route path="/setting" component={BasicSetting} exact />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		</Router>
	);
};

ReactDOM.render(
	// <React.StrictMode>
	<Provider store={store}>
		<Wrapper />
	</Provider>,
	// </React.StrictMode>
	document.getElementById("root")
);
