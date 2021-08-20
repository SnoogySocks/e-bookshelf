import React, { useRef } from "react";
// Styles
import { Wrapper, Button } from "./FileUploadButton.styles.js";

// https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
// https://www.youtube.com/watch?v=cei2Ch683q0
const FileUploadButton = ({ onFileSelect }) => {
	const fileInput = useRef(null);
	const handleFileInput = (e) => {
		// Hnadle validations
        console.log(e.target.value);
		onFileSelect(e.target.files[0]);
	};

	return (
		<Wrapper>
			<input type="file" onChange={handleFileInput} />
			<Button
				onClick={(e) => fileInput.current && fileInput.current.click()}
			>
				CHOOSE A FILE
			</Button>
		</Wrapper>
	);
};

export default FileUploadButton;
