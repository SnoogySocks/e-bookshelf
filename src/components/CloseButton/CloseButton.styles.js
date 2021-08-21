import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
`;

export const Content = styled.button`
	float: right;
	margin-bottom: 10px;
	margin-left: 10px;
	width: 30px;
	height: 30px;
	padding: 0;
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: all 0.3s;

	:hover {
		background-color: var(--translucent);
	}
`;

export const X1 = styled.div`
	height: 25px;
	width: 2px;
	margin-left: 15px;
	background-color: ${({ xColor }) => xColor };
	transform: rotate(45deg);
	z-index: 1;
`;

export const X2 = styled.div`
	height: 25px;
	width: 2px;
	background-color: ${({ xColor }) => xColor};
	transform: rotate(90deg);
	z-index: 2;
`;