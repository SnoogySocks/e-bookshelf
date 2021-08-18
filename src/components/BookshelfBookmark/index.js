import React, { useState } from "react";
// Images
import AddBook from "../../images/add_book_button.png";
import EditBooks from "../../images/edit_books_button.png";
// Components
import Bookmark from "../../components/Bookmark";
import MyDropdown from "../../components/MyDropdown";
import Button from "../../components/Button";
// Styles
import { ButtonWrapper } from "./BookshelfBookmark.styles";

const options = ["MANUALLY", "AUTHOR", "TITLE"];

const BookshelfBookmark = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    
    return (
        <Bookmark>
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
    );
};

export default BookshelfBookmark;