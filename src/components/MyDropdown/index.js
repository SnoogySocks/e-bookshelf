import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
// Images
import Caret from "../../images/caret.png";
// Styles
import { Wrapper } from "./MyDropdown.styles";

const MyDropdown = ({ options, selectedOption, setSelectedOption }) => (
	<Wrapper>
		<Dropdown className="dropdown">
			<Dropdown.Toggle className="dropdown-toggle" variant="success">
				{selectedOption}
				<img src={Caret} alt="caret" />
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{options.map((sortingOption, index) => (
					<span key={sortingOption}>
						<Dropdown.Item
							className="dropdown-item"
							key={sortingOption}
							as="button"
							onClick={() => setSelectedOption(sortingOption)}
						>
							{sortingOption}
						</Dropdown.Item>
						{index !== options.length - 1 && <Dropdown.Divider />}
					</span>
				))}
			</Dropdown.Menu>
		</Dropdown>
	</Wrapper>
);
export default MyDropdown;
