import React from "react";

import { Wrapper } from "./Button.styles";

const Button = ({ imageSource, alt, callback }) => (
	<Wrapper>
		<img src={imageSource} alt={alt} onClick={callback} />
	</Wrapper>
);

export default Button;
