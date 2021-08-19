import React from "react";
// Styles
import { Wrapper, X1, X2 } from "./CloseButton.styles";

const CloseButton = ({ xColor, callback }) => (
	<Wrapper onClick={callback}>
		<X1 xColor={xColor}>
			<X2 xColor={xColor} />
		</X1>
	</Wrapper>
);

export default CloseButton;
