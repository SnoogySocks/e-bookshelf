import React from "react";
// Styles
import { Wrapper, Content } from "./Bookmark.styles";

const Bookmark = ({ children }) => (
    <Wrapper>
        <Content>{children}</Content>
    </Wrapper>
);

export default Bookmark;