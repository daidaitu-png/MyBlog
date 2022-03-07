import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import 'antd/dist/antd.css'
import HomeManagement from "./container/HomeManagement";

ReactDOM.render(
	// <React.StrictMode>
		<div>
			<HomeManagement />
		</div>
	// </React.StrictMode>
  ,
	document.getElementById("root")
);
