import React from "react";

import { Form } from "react-bootstrap";

import {
	TYPE_TRACKS,
	TYPE_ARTISTS,
	TYPE_PLAYLISTS,
} from "../constants/searchTypeConstants";

const SearchTypeSelector = ({ setType }) => {
	return (
		<Form.Group>
			<Form.Control
				size='md'
				as='select'
				onChange={(e) => setType(e.target.value)}
				defaultValue='tracks'
			>
				<option value={TYPE_TRACKS}>Tracks</option>
				<option value={TYPE_ARTISTS}>Artists</option>
				<option value={TYPE_PLAYLISTS}>Playlists</option>
			</Form.Control>
		</Form.Group>
	);
};

export default SearchTypeSelector;
