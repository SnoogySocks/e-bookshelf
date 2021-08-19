import styled from "styled-components";

export const Image = styled.img`
	max-width: 720px;
	width: 100%;
	height: 100%;
	transition: all 1s;
	object-fit: cover;
	animation: animateThumb 0.5s;
	filter: drop-shadow(0 15px 13px var(--translucent));

	/* Mkae darker and add subtitle caption thing later */
	:hover {
		opacity: 0.8;
	}

	@keyframes animateThumb {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
