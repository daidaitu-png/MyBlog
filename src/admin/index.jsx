import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import 'antd/dist/antd.css'
import HomeManagement from "./container/HomeManagement";
import { Provider } from "react-redux";

import store from './store'

ReactDOM.render(
	// <React.StrictMode>
		<Provider store={store}>
			<HomeManagement />
		</Provider>
	// </React.StrictMode>
  ,
	document.getElementById("root")
);
