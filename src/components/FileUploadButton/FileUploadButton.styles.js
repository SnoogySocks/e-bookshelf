import styled from "styled-components";

export const Wrapper = styled.div`
`;

const Button = styled.button`
	padding: 10px;
	color: var(--lightGrey);
	border-radius: 5px;
	cursor: pointer;
`;

export const ChooseFileButton = styled(Button)`
	background-color: var(--darkBeige);
	border: 2px solid var(--darkBeige);

	:hover {
		background-color: var(--darkestBeige);
	}
`;

export const SubmitFileButton = styled(Button)`
	background-color: black;
	border: 2px solid black;

	:hover {
		background-color: var(--darkGrey);
	}
`;