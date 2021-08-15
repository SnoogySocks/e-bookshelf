import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: var(--maxContentWidth);
	width: 100%;
	margin: 0 auto;
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-gap: 3rem;
`;