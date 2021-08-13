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
	h3 {
		display: flex;
	}
	.drop-down {
		color: white;

		div {
			display: flex;
			flex-direction: column;
			width: 150px;
			padding: 2px 0;
			background: white;
			border-top: 10px solid;
			border-bottom: 10px solid;
			border-radius: 10%;
			
			button {
				padding: 0;
				border: none;
				border-radius: none;
				background-color: white;

				:hover {
					background-color: var(--lightGrey);
				}
			}
		}
	}
	
	.drop-down-toggle {
		display: flex;
		justify-content: left;
		border: none;
		width: 95px;
		background-color: black;
		color: white;
		text-decoration: underline;
		font-size: 0.9rem;
		font-weight: 600;

		img {
			width: 10%;
			margin: 4px;
			transform: rotate(315deg);
		}
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