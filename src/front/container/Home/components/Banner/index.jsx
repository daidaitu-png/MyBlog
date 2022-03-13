import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

export default function Banner({ schema }) {
	const { attributes = {} } = schema;
	const {
		title,
		showSmallPic,
		bgUrl,
    smallPicUrl,
		bgHeight,
		description = "TS在构建大型应用上的优势，以及与JS的完美互通，让TS未来一片光明，在慕课网人气讲师dell老师带你从0到1系统学习，把TS真正应用到框架和项目中，在框架中学，在项目中学，在老师指导中学！",
	} = attributes;

	const wrapperStyleObj = bgUrl ? { backgroundImage: `url('${bgUrl}')` } : {};

	bgHeight && (wrapperStyleObj.height = parseInt(bgHeight, 10));

	return (
		<div className="wrap" style={wrapperStyleObj}>
			<div className={styles.banner}>
				<div className={styles.person}>
					{showSmallPic && smallPicUrl ? (
						<img className={styles.avatar} src={smallPicUrl} alt="" />
					) : null}
					<div className={styles.content}>
						<div className={styles.title}>{title}</div>
						<div className={styles.desc}>{description}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
