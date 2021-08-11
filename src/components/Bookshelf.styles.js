import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
`;

export const Content = styled.div`
    displaY: grid;
    position: relative;
    grid-template-columns: 1fr 5fr;
    grid-gap: 3rem;
    background-color: red solid;
`;