import React from "react";
// Styles
import {
	Wrapper,
	BookMarkBody,
	BookMarkBottom,
	Content,
} from "./Bookmark.styles";

// TODO add position prop here when making read thing for absolute positioning
const Bookmark = ({ children }) => (
	<Wrapper>
		<BookMarkBody>
			<Content>{children}</Content>
		</BookMarkBody>
		<BookMarkBottom />
	</Wrapper>
);

export default Bookmark;
