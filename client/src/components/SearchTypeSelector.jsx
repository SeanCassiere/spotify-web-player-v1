import React from "react";

import { Form } from "react-bootstrap";

const SearchTypeSelector = ({ setType }) => {
	return (
		<Form.Group>
			<Form.Control
				size='md'
				as='select'
				onChange={(e) => setType(e.target.value)}
				defaultValue='tracks'
			>
				<option value='tracks'>Tracks</option>
				<option value='albums'>Albums</option>
				<option value='playlists'>Playlists</option>
			</Form.Control>
		</Form.Group>
	);
};

export default SearchTypeSelector;
