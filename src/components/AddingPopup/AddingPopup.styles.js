import styled from "styled-components";

/* Copy and pasted from https://dev.to/satishnaikawadi2001/build-custom-modal-popup-component-in-react-js-29g5 */
const visible = `
    pointer-events: auto;
    opacity: 1;
    transition: all .3s ease-in-out;
`;

export const Wrapper = styled.div`
	position: fixed;
	display: block;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 100;
	overflow-x: hidden;
	background-color: rgba(31, 32, 41, 0.75);
	pointer-events: none;
	opacity: 0;
	transition: opacity 250ms 700ms ease;

	${({ isVisible }) => isVisible && visible}
`;

export const Content = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 60%;
	margin: 20px auto;
	border-radius: 4px;
	padding: 20px;
	background-color: var(--lightBeige);
	align-self: center;
	box-shadow: 0 12px 25px 0 rgba(199, 175, 189, 0.25);
	opacity: 0;
	transform: scale(0.6);
	transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
	transform: scale(0);

	${({ isVisible }) =>
		isVisible &&
		`opacity: 1;
        transform: scale(1);
        transition: opacity 0.25s 0.5s ease, transform 0.35s 0.5s ease;
	`}
`;
	