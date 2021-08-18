import React, { useState } from "react";
import { Link } from "react-router-dom";
// Images
import AddBook from "../../images/add_book_button.png";
import EditBooks from "../../images/edit_books_button.png";
import NoImage from "../../images/no_image.png";
// Components
import Bookmark from "../../components/Bookmark";
import MyDropdown from "../../components/MyDropdown";
import SearchBar from "../../components/SearchBar";
import BookCover from "../../components/BookCover";
import Grid from "../../components/Grid";
import Button from "../../components/Button";
// Styles
import { Wrapper, Content, ButtonWrapper } from "./Bookshelf.styles";

const options = ["MANUALLY", "AUTHOR", "TITLE"];

const Bookshelf = ({ isEditable }) => {
	const [selectedOption, setSelectedOption] = useState(
		options[0]
	);
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<Wrapper>
			<Bookmark>
				<h1>Bookshelf</h1>
				<hr />
				<h3>5 books</h3>
				<hr />
				<h3>
					Sort by
					<MyDropdown options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
				</h3>
				{/* TODO make them default to home when they are pressed */}
				<ButtonWrapper>
					<Button
						image={AddBook}
						alt="add_book_button"
						callback={() => console.log("add book button")}
					/>
					<Button
						image={EditBooks}
						alt="edit_books_button"
						callback={() => console.log("edit books button")}
					/>
				</ButtonWrapper>
			</Bookmark>
			<Content>
				<SearchBar setSearchTerm={setSearchTerm} />
				<hr />
				<Grid>
					{/* Place holder value for now */}
					{[...Array(20).keys()].map((num) => (
						<BookCover
							key={num}
							image={NoImage}
							bookId={num}
							isEditable={isEditable}
						/>
					))}
				</Grid>
			</Content>
		</Wrapper>
	);
};

export default Bookshelf;
