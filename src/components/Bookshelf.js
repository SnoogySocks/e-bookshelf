import React from "react";
// Components
import Bookmark from "./Bookmark";
// Styles
import { Wrapper, Content } from "./Bookshelf.styles";

const Bookshelf = () => {
	return (
		<Wrapper>
			<Content>
				<Bookmark>
					<h1>Bookshelf</h1>
					<hr />
					<h3>5 books</h3>
					<hr />
					{/* TODO make manually a drop down bar */}
					<h3>Sort MANUALLY</h3>
				</Bookmark>
			</Content>
		</Wrapper>
	);
};

export default Bookshelf;
