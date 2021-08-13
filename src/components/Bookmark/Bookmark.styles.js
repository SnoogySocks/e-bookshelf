import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	left: 0;
	height: 95vh;
	background: black;
	padding: 40px 20px;
	animation: var(--loadingDuration) ease-out 0s 1 slideDown;

	@keyframes slideDown {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}
`;

export const Content = styled.div`
	h1 {
		color: var(--lightGrey);
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 50px;
	margin: auto;
`;

export const Button = styled.img`
	width: 35px;
`;