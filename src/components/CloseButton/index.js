import React from "react";
// Styles
import { Wrapper, Content, X1, X2 } from "./CloseButton.styles";

const CloseButton = ({ xColor, callback }) => (
	<Wrapper>
		<Content onClick={callback}>
			<X1 xColor={xColor}>
				<X2 xColor={xColor} />
			</X1>
		</Content>
	</Wrapper>
);

export default CloseButton;
