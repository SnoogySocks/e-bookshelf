import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Button = styled.button`
	padding: 10px;
	color: white;
	background-color: var(--darkBeige);
    border: 2px solid var(--darkBeige);
	border-radius: 5px;
	cursor: pointer;

    :hover {
        background-color: var(--darkestBeige);
    }
`;