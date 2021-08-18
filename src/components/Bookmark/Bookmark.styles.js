import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	height: 95vh;
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

export const BookMarkBody = styled.div`
	position: relative;
	left: 0;
	width: 205px;
	height: 87%;
	background: black;
	padding: 40px 20px;
`;

export const BookMarkBottom = styled.div`
	background-color: black;
	clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 0, 0 100%);
	width: 100%;
	height: 13%;
`;

export const Content = styled.div`
	h1 {
		color: var(--lightGrey);
	}

	h3 {
		display: flex;
		align-items: center;
	}
`;