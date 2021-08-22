import React, { useState, useEffect } from "react";
// Helpers
import axios from "axios";
import { memoryUnitFormatter } from "../../util";
// Styles
import {
	Wrapper,
	Content,
	ChooseFileButtonWrapper,
	SubmitFileButtonWrapper,
	ChooseFileButton,
	SubmitFileButton,
} from "./FileUploadInterface.styles.js";

const init = { name: "No File Selected" };
// https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
const FileUploadInterface = ({ isVisible, onSubmit }) => {
	const fileInput = React.createRef();
	// maybe put it in separate hook when comes to get the stuff
	const [selectedFile, setSelectedFile] = useState(init);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!isVisible) {
			setSelectedFile(init);
			fileInput.current.value = "";
		}
	}, [isVisible, fileInput]);

	const handleFileInput = (e) => {
		console.log(e.target.files[0]);
		setSelectedFile(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		setIsLoading(true);
		e.preventDefault();

		console.log(selectedFile);
		const data = new FormData();
		data.append("file", selectedFile);

		// Post the selectedFile into uploads folder
		axios
			.post("http://localhost:8000/upload", data, {})
			.then((res) => {
				console.log(res.statusText);
				setIsLoading(false);
				onSubmit();
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
				<Content>
					<div>{selectedFile.name}</div>
					<div>{memoryUnitFormatter(selectedFile.size)}</div>
				</Content>
				<SubmitFileButtonWrapper>
					<SubmitFileButton type="submit">UPLOAD</SubmitFileButton>
				</SubmitFileButtonWrapper>
			</Wrapper>
		</form>
	);
};

export default FileUploadInterface;
