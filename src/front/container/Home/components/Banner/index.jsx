import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import avatarImg from "./avatar.jpg";

export default function Banner() {
	// const title = window.localStorage.title || "";
	// const desc = window.localStorage.desc || "";
	const [title, setTitle] = useState("This is the title area");
	const [desc, setDesc] = useState("This is the description area");
  const [schema, setSchema] = useState({});

  useEffect(()=>{
    setSchema(JSON.parse(window.localStorage?.schema)||{})
  },[])

	// useEffect(() => {
	// 	setTitle(window.localStorage.title || title);
	// 	setDesc(window.localStorage.desc || desc);
	// }, []);

  useEffect(()=>{
    setTitle(schema?.children?.[0]?.attributes?.title)
    setDesc(schema?.children?.[0]?.attributes?.desc)
  },[schema])
	return (
		<div className="wrap">
			<div className={styles.banner}>
				<div className={styles.person}>
					<img
						className={styles.avatar}
						src="https://lm-serverless-project-static-files.oss-cn-beijing.aliyuncs.com/images/avatar.jpg?Expires=1646486937&OSSAccessKeyId=TMP.3KhNsSeQyjLsoX4d8maDXRd7aoqH5LXqovHVnREGwbGWH5yop8w3qGvT8e36AAnzeip26n13DcNRGViYMUHgEiyu9kNvMD&Signature=s3P2DrV8N%2BpM%2BYmlgRy2rHpQgnQ%3D"
						alt=""
					/>
					<div className={styles.title}>{title}</div>
					<div className={styles.desc}>{desc}</div>
				</div>
			</div>
		</div>
	);
}
