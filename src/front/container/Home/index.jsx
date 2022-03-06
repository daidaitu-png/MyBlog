import React, { useState, useEffect } from "react";
import Bannner from "./components/Banner";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

// let listData = [];
// console.log("123",window.localStorage.homeData);

// try {
// 	// listData = JSON.pasrse(window.localStorage.homeData);
//   listData = JSON.parse('[{},{},{}]');
// } catch (error) {}

const Home = () => {
	const [list, setList] = useState([]);
	useEffect(() => {
		// setList(
		// 	window.localStorage.homeData
		// 		? JSON.parse(window.localStorage.homeData)
		// 		: list
		// );
		setList(JSON.parse(window.localStorage?.schema).children?.splice(3));
	}, []);
	return (
		<div>
			<Bannner />
			<Courses />
			<Footer />
			{list.map((item, index) => {
				return (
					<div class="wrap" key={index}>
						area
					</div>
				);
			})}
		</div>
	);
};

export default Home;
