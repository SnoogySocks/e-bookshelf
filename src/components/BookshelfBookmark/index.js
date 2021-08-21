import React, { useState } from "react";
// Images
import AddBook from "../../images/add_book_button.png";
import EditBooks from "../../images/edit_books_button.png";
// Components
import Bookmark from "../../components/Bookmark";
import MyDropdown from "../../components/MyDropdown";
import Button from "../IconButton";
// Styles
import { ButtonWrapper } from "./BookshelfBookmark.styles";

const options = ["MANUALLY", "AUTHOR", "TITLE"];

const BookshelfBookmark = ({ selectedOption, setSelectedOption, toggleEditable, toggleAdding }) => {
	return (
		<Bookmark width="205px">
			<h1>Bookshelf</h1>
			<hr />
			<h3>5 books</h3>
			<hr />
			<h3>
				Sort by
				<MyDropdown
					options={options}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
				/>
			</h3>
			<ButtonWrapper>
				<Button
					image={AddBook}
					alt="add_books_button"
					callback={() => toggleAdding()}
				/>
				<Button
					image={EditBooks}
					alt="edit_books_button"
					callback={() => toggleEditable()}
				/>
			</ButtonWrapper>
		</Bookmark>
	);
};

export default BookshelfBookmark;
