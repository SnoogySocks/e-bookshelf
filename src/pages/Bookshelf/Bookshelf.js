import React, { useState } from "react";
import { Link } from "react-router-dom";
// Images
import NoImage from "../../images/no_image.png";
// Components
import BookshelfBookmark from "../../components/BookshelfBookmark";
import SearchBar from "../../components/SearchBar";
import BookCover from "../../components/BookCover";
import Grid from "../../components/Grid";
// Styles
import { Wrapper, Content } from "./Bookshelf.styles";

const Bookshelf = ({ isEditable }) => {	
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<Wrapper>
			<BookshelfBookmark />
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
