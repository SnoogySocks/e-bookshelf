import React, { useState } from "react";
// Images
import NoImage from "../../images/no_image.png";
// Components
import BookshelfBookmark from "../../components/BookshelfBookmark";
import SearchBar from "../../components/SearchBar";
import BookCover from "../../components/BookCover";
import Grid from "../../components/Grid";
import AddingPopup from "../../components/AddingPopup";
import FileUploadButton from "../../components/FileUploadButton";
// Styles
import { Wrapper, Content } from "./Bookshelf.styles";

const Bookshelf = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isAdding, setIsAdding] = useState(false);
	const toggleAdding = () => {
		setIsAdding(!isAdding);
	};

	const [isEditable, setIsEditable] = useState(false);
	const toggleEditable = () => {
		setIsEditable(!isEditable);
	};

	const onFileSelect = (file) => {
		console.log(file);
	};

	return (
		<Wrapper>
			<BookshelfBookmark
				toggleEditable={toggleEditable}
				toggleAdding={toggleAdding}
			/>
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
							isVisible={isEditable}
						/>
					))}
				</Grid>
				<AddingPopup
					isVisible={isAdding}
					onClose={() => setIsAdding(false)}
				>
					<form>
						<FileUploadButton onFileSelect={onFileSelect} />
					</form>
				</AddingPopup>
			</Content>
		</Wrapper>
	);
};

export default Bookshelf;
