import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 50px 0 50px 70px;
    
    hr {
        margin: 30px 0;
        padding: 0;
        border: 1px solid var(--darkBeige);
        background-color: var(--darkBeige);
    }
`;