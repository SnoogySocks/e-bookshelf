import React, { useRef } from "react";
// Styles
import { Wrapper, ChooseFileButton, SubmitFileButton } from "./FileUploadButton.styles.js";

// https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
// https://www.youtube.com/watch?v=cei2Ch683q0
const FileUploadButton = ({ onFileSelectSuccess, onFileSelectError }) => {
	const myForm = React.createRef();
	const fileInput = React.createRef();

	const handleFileInput = (e) => {
		// Only accept files with epub extension
		if (e.target.value.split(".").pop() === "epub") {
			onFileSelectSuccess(e.target.files[0]);
		} else onFileSelectError({ errorMessage: "We only accept epub files" })
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		const endpoint = "src/upload.php";
		const formData = new FormData();

		// fileInput.current.files[0] is the same as e.target.files[0] @see line 14
		formData.append("fileInput", fileInput.current.files[0]);

		fetch(endpoint, {
			method: "post",
			body: formData
		}).catch(e => {
			onFileSelectError({
				errorMessage: e
			});
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
				<SubmitFileButton type="submit">
					SUBMIT THE FILE
				</SubmitFileButton>
			</form>
		</Wrapper>
	);
};

export default FileUploadButton;
