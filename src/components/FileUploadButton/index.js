import React, { useRef } from "react";
// Styles
import { Wrapper, Button } from "./FileUploadButton.styles.js";

const FileUploadButton = ({ onFileSelect }) => {
	const fileInput = useRef(null);
	const handleFileInput = (e) => {
		// Hnadle validations
        console.log(e.target.value);
		onFileSelect(e.target.files[0]);
	};

	return (
		<div>Hello World</div>
	);
};

export default FileUploadButton;
