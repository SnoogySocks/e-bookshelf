import React, { useState, useEffect, useRef } from "react";
// Image
import SearchIcon from "../../images/search_icon.png";
// Styles
import { Wrapper, Content, SearchButton } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
	const [state, setState] = useState("");

	return (
		<Wrapper>
			<Content>
				<input
					type="text"
					placeholder="Search Book"
					onChange={(event) => setState(event.currentTarget.value)}
					value={state}
				/>
				<SearchButton
					type="button"
					onClick={() => setSearchTerm(state)}
				>
					<img src={SearchIcon} alt="search_icon" />
				</SearchButton>
			</Content>
		</Wrapper>
	);
};

export default SearchBar;
