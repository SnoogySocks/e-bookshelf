import React from "react";

import { Wrapper } from "./Button.styles";

const Button = ({ image, alt, callback }) => (
	<Wrapper>
		<img src={image} alt={alt} onClick={callback} />
	</Wrapper>
);

export default Button;
