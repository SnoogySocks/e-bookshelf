import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
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