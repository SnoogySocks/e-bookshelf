import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 70px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--maxContentWidth);
    
    hr {
        margin: 0;
        padding: 0;
        border: 1px solid var(--darkBeige);
        background-color: var(--darkBeige);
    }
`;