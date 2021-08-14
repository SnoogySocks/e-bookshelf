import React, { useState, useEffect, useRef } from "react";
// Image
import SearchIcon from "../../images/search_icon.png";
// Styles
import { Wrapper, SearchButton } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
	const [state, setState] = useState("");

	return (
		<Wrapper>
			<SearchButton
				type="button"
				onClick={() => {
					console.log("clicked", state);
					setSearchTerm(state);
				}}
			>
				<input
					type="text"
					placeholder="Search Book"
					// TODO fix issue where clicking on typing clicks the search button
					onChange={(event) => setState(event.currentTarget.value)}
					value={state}
				/>
				<img src={SearchIcon} alt="search_icon" />
			</SearchButton>
		</Wrapper>
	);
};

export default SearchBar;
