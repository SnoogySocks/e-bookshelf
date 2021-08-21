import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	background-color: var(--medBeige);
	border-radius: 5px;
`;

const Button = styled.button`
	padding: 10px;
	color: var(--lightGrey);
	border-radius: 5px;
	cursor: pointer;
`;

export const ChooseFileButtonWrapper = styled(ButtonWrapper)`
`;

export const ChooseFileButton = styled(Button)`
	float: right;
	background-color: var(--darkBeige);
	border: 2px solid var(--darkBeige);

	:hover {
		background-color: var(--darkestBeige);
	}
`;
export const SubmitFileButtonWrapper = styled(ButtonWrapper)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	padding-top: 0;
`;

export const SubmitFileButton = styled(Button)`
	background-color: black;
	border: 2px solid black;

	:hover {
		background-color: var(--darkGrey);
	}
`;