import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const FileDisplay = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 15px;
	margin: 30px;
	width: auto;
	border: 4px ${({ borderStyle }) => borderStyle} var(--darkBeige);
`;

const ButtonWrapper = styled.div`
	padding: 15px;
	width: 100%;
	background-color: var(--medBeige);
	border-radius: 5px;
`;

const Button = styled.button`
	width: 15ch;
	padding: 10px;
	color: var(--lightGrey);
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

export const ChooseFileButtonWrapper = styled(ButtonWrapper)``;

export const ChooseFileButton = styled(Button)`
	float: right;
	background-color: var(--darkBeige);

	:hover {
		background-color: var(--darkestBeige);
	}
`;
export const SubmitFileButtonWrapper = styled(ButtonWrapper)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SubmitFileButton = styled(Button)`
	background-color: black;

	:hover {
		background-color: var(--darkGrey);
	}
`;
