import React from "react";
import styles from "./style.module.scss";
import avatarImg from "./avatar.jpg";

export default function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.person}>
				<img className={styles.avatar} src="https://lm-serverless-project-static-files.oss-cn-beijing.aliyuncs.com/images/avatar.jpg?Expires=1646486937&OSSAccessKeyId=TMP.3KhNsSeQyjLsoX4d8maDXRd7aoqH5LXqovHVnREGwbGWH5yop8w3qGvT8e36AAnzeip26n13DcNRGViYMUHgEiyu9kNvMD&Signature=s3P2DrV8N%2BpM%2BYmlgRy2rHpQgnQ%3D" alt="" />
				<div className={styles.title}>This is the title area</div>
				<div className={styles.desc}>This is the description area</div>
			</div>
		</div>
	);
}
