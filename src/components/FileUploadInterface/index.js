import React, { useState } from "react";
// Helpers
import axios from "axios";
// Styles
import {
	Wrapper,
	ChooseFileButtonWrapper,
	SubmitFileButtonWrapper,
	ChooseFileButton,
	SubmitFileButton,
} from "./FileUploadInterface.styles.js";

// https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
const FileUploadInterface = ({ children, onSubmit }) => {
	const fileInput = React.createRef();
	// maybe put it in separate hook when comes to get the stuff
	const [selectedFile, setSelectedFile] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// Only accept files with epub extension
	const handleFileInput = (e) => {
		setIsLoading(true);
		setSelectedFile(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = new FormData();
		data.append("file", selectedFile);

		// Post the selectedFile into uploads folder
		axios
			.post("http://localhost:8000/upload", data, {})
			.then((res) => {
				console.log(res.statusText);
				setIsLoading(false);
			})
			.catch((e) => console.log(e));
	};

	return (
		<form onSubmit={handleSubmit}>
			<Wrapper>
				<input
					type="file"
					ref={fileInput}
					accept=".epub"
					onChange={handleFileInput}
					hidden="hidden"
				/>
				<ChooseFileButtonWrapper>
					<ChooseFileButton
						type="button"
						onClick={() =>
							fileInput.current && fileInput.current.click()
						}
					>
						CHOOSE A FILE
					</ChooseFileButton>
				</ChooseFileButtonWrapper>
				{children}
				<SubmitFileButtonWrapper>
					<SubmitFileButton type="submit" onClick={onSubmit}>
						UPLOAD
					</SubmitFileButton>
				</SubmitFileButtonWrapper>
			</Wrapper>
		</form>
	);
};

export default FileUploadInterface;
