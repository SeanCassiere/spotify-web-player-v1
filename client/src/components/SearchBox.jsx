import React from "react";

import { Form } from "react-bootstrap";

const SearchBox = ({ searchTerms, setSearchTerms }) => {
	return (
		<Form.Control
			placeholder='Search from Spotify'
			type='search'
			value={searchTerms}
			onChange={(e) => setSearchTerms(e.target.value)}
		/>
	);
};

export default SearchBox;
