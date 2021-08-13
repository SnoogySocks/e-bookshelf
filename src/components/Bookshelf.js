import React from "react";
import { Link } from "react-router-dom";
// Images
import AddBook from "../images/Add_Book_Button.png";
import EditBooks from "../images/Edit_Books_Button.png";
// Components
import Bookmark from "./Bookmark";
import { ButtonWrapper, Button } from "./Bookmark/Bookmark.styles";
// Styles
import { Wrapper } from "./Bookshelf.styles";

const Bookshelf = () => {
	return (
		<Wrapper>
			<Bookmark>
				<h1>Bookshelf</h1>
				<hr />
				<h3>5 books</h3>
				<hr />
				{/* TODO make manually a drop down bar */}
				<h3>Sort MANUALLY</h3>
				{/* TODO make them default to home when they are pressed */}
				<ButtonWrapper>
					<Link to="/add">
						<Button src={AddBook} alt="Add_Book_Button" />
					</Link>
					<Link to="/edit">
						<Button src={EditBooks} alt="Edit_Books_Button" />
					</Link>
				</ButtonWrapper>
			</Bookmark>
			<div>Hello World</div>
		</Wrapper>
	);
};

export default Bookshelf;
