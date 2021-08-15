import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 0 50px;
	height: 45px;
`;

export const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	max-width: var(--maxContentWidth);
	height: 100%;

	input {
		width: 100%;
		padding: 0 100px 0 30px;
		background-color: var(--lightBeige);
		border: 0;
		border-radius: 40px 70px 0 40px;
		font-size: var(--fontMed);

		:focus {
			outline: none;
		}
	}
`;

export const SearchButton = styled.div`
	position: absolute;
	display: flex;
	height: 100%;
	width: 100px;
	right: 0;
	background-color: var(--darkBeige);
	border-radius: 0 40px;
	overflow: hidden;

	:active {
		background-color: var(--darkestBeige);
	}
	
	img {
		margin: 10px auto 0 37%;
		width: auto;
	}
`;
