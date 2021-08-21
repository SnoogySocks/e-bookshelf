import React, { useState } from "react";
// Helpers
import axios from "axios";
// Styles
import {
	Wrapper,
	ChooseFileButton,
	SubmitFileButton,
} from "./FileUploadButton.styles.js";

// https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
const FileUploadButton = ({ onFileSelectSuccess, onFileSelectError }) => {
	const myForm = React.createRef();
	const fileInput = React.createRef();
	const [selectedFile, setSelectedFile] = useState(null);
	const [loaded, setLoaded] = useState(0);

	const handleFileInput = (e) => {
		// Only accept files with epub extension
		if (e.target.value.split(".").pop() === "epub") {
			onFileSelectSuccess(e.target.files[0]);
			setSelectedFile(e.target.files[0]);
			setLoaded(0);
		} else onFileSelectError({ errorMessage: "We only accept epub files" });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = new FormData();
		data.append("file", selectedFile);

		axios
			// receive two parameter endpoint url ,form data
			.post("http://localhost:8000/upload", data, {})
			.then((res) => {
				// then print response status
				console.log(res.statusText);
			});
	};

	return (
		<Wrapper>
			<form ref={myForm} onSubmit={handleSubmit}>
				<input
					type="file"
					ref={fileInput}
					onChange={handleFileInput}
					hidden="hidden"
				/>
				<ChooseFileButton
					type="button"
					onClick={() =>
						fileInput.current && fileInput.current.click()
					}
				>
					CHOOSE A FILE
				</ChooseFileButton>
				<SubmitFileButton type="submit">UPLOAD</SubmitFileButton>
			</form>
		</Wrapper>
	);
};

export default FileUploadButton;
