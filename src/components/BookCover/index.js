import React from "react";
import { Link } from "react-router-dom";
//Styles
import { Image } from "./BookCover.styles";

const BookThumb = ({ image, bookId, isVisible }) => {
	return (
		<>
			<Link to={`/${bookId}`}>
				<Image src={image} alt="book_thumb" />
			</Link>
		</>
	);
};

export default BookThumb;