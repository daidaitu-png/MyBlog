import React from "react";
import styles from "./style.module.scss";
import c1Img from "./c1.jpg";

export default function Courses({ schema }) {
	const { children = [] } = schema;

	return (
		<div className="wrap">
			<div className={styles.courses}>
				<ul className={styles.list}>
					{children.map((item, index) => {
						const { attributes = {} } = item;
						const { title, description, imageUrl, link } = attributes;
						return (
							<li className={styles.item} key={index}>
								<a
									href={link}
									target="_blank"
									rel="noreferrer"
									className={styles.link}
								>
									<img className={styles.img} src={imageUrl} alt={title} />

									<h4 className={styles.title}>{title || "暂无标题"}</h4>
									<p className={styles.desc}>{description || "暂无描述"}</p>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
