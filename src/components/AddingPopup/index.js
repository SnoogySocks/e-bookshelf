import React, { useEffect, useRef } from "react";
// Components
import CloseButton from "../CloseButton";
// Styles
import { Wrapper, Content } from "./AddingPopup.styles";

const AddingPopup = ({ children, isVisible, onClose }) => {
	return (
		<Wrapper isVisible={isVisible}>
			<Content isVisible={isVisible}>
				<CloseButton xColor="black" callback={onClose} />
				{children}
			</Content>
		</Wrapper>
	);
};

export default AddingPopup;
