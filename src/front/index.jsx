import React from "react";
import ReactDOM from "react-dom";
import Home from "./container/Home";
import "normalize.css";
import { Helmet } from "react-helmet";

import "./style.scss";

ReactDOM.render(
	<React.StrictMode>
		<Helmet>
			<meta charSet="utf-8" />
			<title>{window.localStorage.title || "dell"}</title>
			<link rel="canonical" href="http://mysite.com/example" />
		</Helmet>
		<Home />
	</React.StrictMode>,
	document.getElementById("root")
);
