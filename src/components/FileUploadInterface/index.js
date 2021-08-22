import React, { useState, useEffect } from "react";
// Helpers
import axios from "axios";
import { memoryUnitFormatter } from "../../util";
// Components
import Spinner from "../Spinner";
// Styles
import {
	Wrapper,
	FileDisplay,
	ChooseFileButtonWrapper,
	SubmitFileButtonWrapper,
	ChooseFileButton,
	SubmitFileButton,
} from "./FileUploadInterface.styles.js";

const init = { name: "No File Selected" };
const loadingStages = {
	notLoading: "File has not been uploaded Loading",
	isLoading: "File is being uploaded",
	submitted: "File has been submitted",
};
// https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
const FileUploadInterface = ({ isVisible, onSubmit }) => {
	const fileInput = React.createRef();
	// maybe put it in separate hook when comes to get the stuff
	const [selectedFile, setSelectedFile] = useState(init);
	const [loadingStage, setLoadingStage] = useState(loadingStages.notLoading);

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
		setLoadingStage(loadingStages.isLoading);
		e.preventDefault();

		console.log(selectedFile);
		const data = new FormData();
		data.append("file", selectedFile);

		// Post the selectedFile into uploads folder
		axios
			.post("http://localhost:8000/upload", data, {})
			.then((res) => {
				console.log(res.statusText);
				setLoadingStage(loadingStages.submitted);
				setTimeout(() => {
					onSubmit();
					setTimeout(
						() => setLoadingStage(loadingStages.notLoading),
						300
					);
				}, 1500);
			})
			.catch((e) => {
				setLoadingStage(loadingStages.notLoading);
				console.log(e);
			});
	};

	const handleFileDisplay = () => {
		switch (loadingStage) {
			case loadingStages.notLoading:
				return (
					<FileDisplay borderStyle={"dashed"}>
						<div>{selectedFile.name}</div>
						<div>{memoryUnitFormatter(selectedFile.size)}</div>
					</FileDisplay>
				);
			case loadingStages.isLoading:
				return <Spinner size="58px"/>;
			case loadingStages.submitted:
				return (
					<FileDisplay borderStyle={"solid"}>
						<div>FILE SUBMITTED</div>
					</FileDisplay>
				);
			default:
				return (
					<div>If you are reading this something bad happened</div>
				);
		}

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
				{handleFileDisplay()}
				<SubmitFileButtonWrapper>
					<SubmitFileButton type="submit">UPLOAD</SubmitFileButton>
				</SubmitFileButtonWrapper>
			</Wrapper>
		</form>
	);
};

export default FileUploadInterface;
