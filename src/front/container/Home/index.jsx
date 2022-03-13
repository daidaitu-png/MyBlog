import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

// let listData = [];
// console.log("123",window.localStorage.homeData);

// try {
// 	// listData = JSON.pasrse(window.localStorage.homeData);
//   listData = JSON.parse('[{},{},{}]');
// } catch (error) {}

const pageSchema = window.localStorage.schema
	? JSON.parse(window.localStorage.schema)
	: {};

const { children = [], attributes = {} } = pageSchema;

const map = { Footer, Banner, List: Courses };

const render = (index, item) => {
	const Component = map[item.name];
	return Component ? <Component key={index} schema={item} /> : null;
	// switch (item.name) {
	// 	case "Banner":
	// 		return <Bannner key={index} schema={item}/>;
	// 	case "Footer":
	// 		return <Footer key={index} schema={item}/>;
	// 	case "List":
	// 		return <Courses key={index} schema={item}/>;
	// 	default:
	// 		return null;
	// }
};

const Home = () => {
	// const [list, setList] = useState([]);
	// useEffect(() => {
	// 	setList(JSON.parse(window.localStorage?.schema)?.children);
	// 	console.log(window.localStorage?.schema);
	// }, []);

	return (
		<div>
			{/* <Bannner />
			<Courses />
			<Footer /> */}
			<Helmet>
				<title>{attributes?.title || ""}</title>
			</Helmet>
			{children.map((item, index) => {
				console.log(item.name);
				return render(index, item);
			})}
		</div>
	);
};

export default Home;
