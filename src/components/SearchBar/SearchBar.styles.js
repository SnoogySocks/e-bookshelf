import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 60px 50px 30px 50px;
	width: 600px;
	height: 45px;
`;

export const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;

	input {
		width: 100%;
		height: 100%;
		padding: 20px 13% 20px 30px;
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
    width: 15%;
    right: 0;
    background-color: var(--darkBeige);
    border-radius: 0 40px;

    :active {
        background-color: var(--darkestBeige);
    }

    img {
        margin: 10px auto 0 37%;
        width: auto;
    }
`;