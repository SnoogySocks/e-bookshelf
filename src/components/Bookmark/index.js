import React from "react";
// Styles
import {
	Wrapper,
	BookMarkBody,
	BookMarkBottom,
	Content,
} from "./Bookmark.styles";

const Bookmark = ({ children }) => (
	<Wrapper>
		<BookMarkBody>
			<Content>{children}</Content>
		</BookMarkBody>
		<BookMarkBottom />
	</Wrapper>
);

export default Bookmark;
