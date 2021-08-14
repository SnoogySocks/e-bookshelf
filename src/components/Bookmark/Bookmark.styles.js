import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0;
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
	}

	.drop-down {
		color: var(--lightGrey);

		div {
			width: 150px;
			background-color: var(--lightGrey);
			border-top: 10px solid var(--lightGrey);
			border-bottom: 10px solid var(--lightGrey);
			border-radius: 10%;
			filter: drop-shadow(0 1ch 2ch rgb(0, 0, 0, 50%));

			button {
				display: flex;
				justify-content: left;
				width: 100%;
				padding: 5px 2ch;
				margin: 0;
				border: none;
				border-radius: none;
				background-color: var(--lightGrey);
				transition: background-color 1s;

				:hover {
					background-color: #cccccc;
				}
			}
		}

		hr {
			margin: 0;
			padding: 0;
			height: 0;
		}
	}

	.drop-down-toggle {
		display: flex;
		justify-content: left;
		padding-bottom: 25px;
		border: none;
		width: 11.5ch;
		height: 20px;
		background-color: black;
		transition: background-color 0.2s;
		color: var(--lightGrey);
		text-decoration: underline;
		font-size: 0.9rem;
		font-weight: 600;

		img {
			width: 9px;
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
	bottom: 5%;
	margin: auto;
`;

export const Button = styled.img`
	width: 35px;
`;