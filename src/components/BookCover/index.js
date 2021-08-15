import React from "react";
import { Link } from "react-router-dom";
//Styles
import { Image } from "./BookCover.styles";

const BookThumb = ({ image, clickable }) => (
	<>
		{/* {clickable ? (
			<Link to={`/${bookId}`}>
				<Image src={image} alt="book_thumb" />
			</Link>
		) : (
			<Image src={image} alt="book_thumb" />
		)} */}
		<Image src={image} alt="book_thumb" />
	</>
);

export default BookThumb;
