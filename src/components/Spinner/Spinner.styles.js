import styled from "styled-components";

export const Spinner = styled.div`
	border: 5px solid var(--lightGrey);
	border-top: 5px solid var(--medGrey);
	border-left: 5px solid var(--medGrey);
	border-radius: 50%;
	${({ size }) =>
		`width: ${size};
        height: ${size};`
    }
	animation: spin 0.8s linear infinite;
	margin: 30px auto;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
