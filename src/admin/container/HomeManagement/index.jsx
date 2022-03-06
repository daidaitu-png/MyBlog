import React, { Children, useRef, useState } from "react";
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

const { Header, Sider, Content } = Layout;

const HomeManagement = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggle = () => {
		setCollapsed(!collapsed);
	};
	const handleHomePageRedirect = () => {
		window.location.href = "/";
	};

	const pageSettingRef = useRef();
	const areaListRef = useRef();

	const handleSaveBtnClick = () => {
		// const listData = JSON.stringify(list);
		// window.localStorage.homeData = listData;

		const schema = {
			name: "Page",
			attributes: {},
			children: [
				{
					name: "Banner",
					attributes: {
						title: pageSettingRef.current.title,
						desc: pageSettingRef.current.desc,
					},
				},
				{
					name: "CourseList",
				},
				{
					name: "Footer",
				},
				// {
				// 	name: "Area",
				// },
				// {
				// 	name: "Area",
				// },
			],
		};
		areaListRef.current.list.forEach((item) => {
			schema.children.push({
				name: "Area",
			});
		});

		console.log(pageSettingRef);
		console.log(areaListRef);
		// const listData = JSON.stringify(areaListRef.current.list);
		// window.localStorage.homeData = listData;
		// window.localStorage.title = pageSettingRef.current.title;
		// window.localStorage.desc = pageSettingRef.current.desc;

		const schemaStr = JSON.stringify(schema);
		window.localStorage.schema = schemaStr;
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
					{/* {React.createElement(
							this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
							{
								className: "trigger",
								onClick: this.toggle,
							}
						)} */}
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 1000,
					}}
				>
					<PageSetting ref={pageSettingRef} />
					<AreaList ref={areaListRef} />
					<div className={styles.save}>
						<Button type="primary" onClick={handleSaveBtnClick}>
							保存区块配置
						</Button>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default HomeManagement;
