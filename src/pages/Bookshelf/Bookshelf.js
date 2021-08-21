import React, { useState } from "react";
// Images
import NoImage from "../../images/no_image.png";
// Components
import BookshelfBookmark from "../../components/BookshelfBookmark";
import SearchBar from "../../components/SearchBar";
import BookCover from "../../components/BookCover";
import Grid from "../../components/Grid";
import AddingPopup from "../../components/AddingPopup";
// Styles
import { Wrapper, Content } from "./Bookshelf.styles";

const Bookshelf = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortingOption, setSortingOption] = useState("");
	const [isAdding, setIsAdding] = useState(false);
	const [isEditting, setIsEditting] = useState(false);
	const [bookshelf, setBookshelf_] = useState([...Array(20).keys()]);

	const toggleAdding = () => {
		setIsAdding(!isAdding);
	};

	const toggleEditable = () => {
		setIsEditting(!isEditting);
	};

	return (
		<Wrapper>
			<BookshelfBookmark
				selectedOption={sortingOption}
				setSelectedOption={setSortingOption}
				toggleEditable={toggleEditable}
				toggleAdding={toggleAdding}
			/>
			<Content>
				<SearchBar setSearchTerm={setSearchTerm} />
				<hr />
				<Grid>
					{/* Place holder value for now */}
					{bookshelf.map((num) => (
						<BookCover
							key={num}
							image={NoImage}
							bookId={num}
							isEditable={isEditting}
						/>
					))}
				</Grid>
				<AddingPopup
					isVisible={isAdding}
					onClose={() => setIsAdding(false)}
				/>
			</Content>
		</Wrapper>
	);
};

export default Bookshelf;
