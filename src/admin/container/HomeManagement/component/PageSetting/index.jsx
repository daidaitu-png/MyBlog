import { Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, {
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from "react";
import styles from "./style.module.scss";

const PageSetting = (props, ref) => {
	const [schema, setSchema] = useState({});
	console.log(JSON.parse(window.localStorage.schema));
	useEffect(() => {
		setSchema(JSON.parse(window.localStorage.schema));
	}, []);
	useEffect(() => {
		setDesc(schema.children?.[0]?.attributes?.desc);
		setTitle(schema.children?.[0]?.attributes?.title);
	}, [schema]);

	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleDescChange = (e) => {
		setDesc(e.target.value);
	};

	useImperativeHandle(ref, () => {
		return {
			title,
			desc,
		};
	});

	return (
		<div>
			<div className={styles.row}>
				<span className={styles.label}>page title</span>
				<Input
					className={styles.content}
					onChange={handleTitleChange}
					placeholder="please add page title"
					value={title}
				/>
			</div>
			<div className={styles.row}>
				<span className={styles.label}>page desc</span>
				<TextArea
					className={styles.content}
					rows={2}
					onChange={handleDescChange}
					placeholder="please add page title"
					value={desc}
				/>
			</div>
		</div>
	);
};

export default forwardRef(PageSetting);
