import styled from "styled-components";

// Sssshhhhhh
// For some reason the buttons are not styled properly when I
// try to use css so here we are, using classes in a styled 
// component. Keep this hush hush
export const Wrapper = styled.div`
	.dropdown {
		color: var(--lightGrey);

		div {
			width: 140px;
			background: linear-gradient(to bottom right, #161616, #434343);
			border-radius: 5%;
			filter: drop-shadow(0 1ch 2ch rgb(0, 0, 0, 50%));

			button {
				display: flex;
				justify-content: left;
				width: 100%;
				padding: 1ch 2ch;
				margin: 0;
				border: none;
				border-radius: none;
				background-color: transparent;
				color: var(--lightGrey);
				transition: background-color 1s;

				:hover {
					background-color: var(--medGrey);
				}
			}
		}

		hr {
			margin: 0;
			padding: 0;
			height: 0;
			border: 0.5px solid var(--lightGrey);
			background-color: var(--lightGrey);
		}
	}

	.dropdown-toggle {
		display: flex;
		justify-content: left;
		padding-bottom: 20px;
		border: none;
		width: 11.75ch;
		height: 20px;
		background-color: black;
		transition: background-color 0.2s;
		color: var(--lightGrey);
		text-decoration: underline;
		font-size: 0.9rem;
		font-weight: 600;

		:hover {
			background-color: var(--medGrey);
		}

		img {
			width: 9px;
			margin: 4px;
			transform: rotate(315deg);
		}
	}
`;
