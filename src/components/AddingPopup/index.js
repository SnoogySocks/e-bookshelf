import React, { useState } from "react";
// Components
import FileUploadInterface from "../FileUploadInterface";
// Styles
import { Background, Wrapper, Exit, Content } from "./AddingPopup.styles";

const AddingPopup = ({ isVisible, onClose }) => {
	return (
		<>
			<Background isVisible={isVisible}>
				<Wrapper>
					<Exit onClick={onClose} />
					<Content isVisible={isVisible}>
						<FileUploadInterface
							onSubmit={onClose}
						></FileUploadInterface>
					</Content>
				</Wrapper>
			</Background>
		</>
	);
};

export default AddingPopup;
