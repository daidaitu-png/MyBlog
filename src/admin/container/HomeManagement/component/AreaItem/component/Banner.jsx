import { Input, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import styles from "./style.module.scss";
import commonStyles from "../style.module.scss";

const Banner = (props) => {
	const { attributes = {}, changeAttributes } = props;
	const { title, description, showSmallPic, smallPicUrl, bgUrl, bgHeight } =
		attributes;

	const handleShowSmallPicChange = (checked) => {
    console.log(checked);
		if (!checked) {
			changeAttributes({
				smallPicUrl: "",
				showSmallPic: checked,
			});
		} else {
			changeAttributes({ showSmallPic: checked });
		}
	};

	return (
		<div className={commonStyles.wrapper}>
			<div className={styles['attribute-row']}>
				<span className={styles.label}>page title</span>
				<Input
					className={styles.content}
					onChange={(e) => {
						changeAttributes({ title: e.target.value });
					}}
					placeholder="please add page title"
					value={title}
				/>
			</div>
			<div className={styles['attribute-row']}>
				<span className={styles.label}>page desc</span>
				<TextArea
					className={styles.content}
					rows={2}
					onChange={(e) => {
						changeAttributes({ description: e.target.value });
					}}
					placeholder="please add page title"
					value={description}
				/>
			</div>
			<div className={styles['attribute-row']}>
				<span className={styles.label}>展示小图</span>
				<Switch checked={showSmallPic} onChange={handleShowSmallPicChange} />
			</div>
			{showSmallPic ? (
				<div className={styles['attribute-row']}>
					<span className={styles.label}>小图url</span>
					<Input
						className={styles.content}
						onChange={(e) => {
							changeAttributes({ smallPicUrl: e.target.value });
						}}
						placeholder="please add 小图url"
						value={smallPicUrl}
					/>
				</div>
			) : null}

			<div className={styles['attribute-row']}>
				<span className={styles.label}>bgUrl</span>
				<Input
					className={styles.content}
					onChange={(e) => {
						changeAttributes({ bgUrl: e.target.value });
					}}
					placeholder="please add bgUrl"
					value={bgUrl}
				/>
			</div>
			<div className={styles['attribute-row']}>
				<span className={styles.label}>bgHeight</span>
				<Input
					type="number"
					className={styles.content}
					onChange={(e) => {
						changeAttributes({ bgHeight: e.target.value });
					}}
					placeholder="please add bgHeight"
					value={bgHeight}
				/>
			</div>
		</div>
	);
};

export default Banner;
