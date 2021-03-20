import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

import { Container, Form } from "react-bootstrap";

import TrackSearchResult from "../components/TrackSearchResult";
import SpotifyWebPlayer from "../components/SpotifyWebPlayer";
import useAuth from "../hooks/useAuth";

const spotifyWebAPI = new SpotifyWebApi({
	clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
	clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
});

const DashboardScreen = ({ code }) => {
	const accessToken = useAuth(code);

	const [searchTerms, setSearchTerms] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [playingTrack, setPlayingTrack] = useState();
	const [lyrics, setLyrics] = useState("");

	const chooseTrack = (track) => {
		setPlayingTrack(track);
		setSearchTerms("");
		setLyrics("");
	};

	useEffect(() => {
		if (!playingTrack) return;

		axios
			.get("http://localhost:3001/lyrics", {
				params: {
					title: playingTrack.title,
					artist: playingTrack.artistNames[0],
				},
			})
			.then((res) => setLyrics(res.data.lyrics));
	}, [playingTrack]);

	useEffect(() => {
		if (!accessToken) return;
		spotifyWebAPI.setAccessToken(accessToken);
	}, [accessToken]);

	useEffect(() => {
		if (!searchTerms) return setSearchResults([]);
		if (!accessToken) return;

		let cancelSearch = false;
		spotifyWebAPI.searchTracks(searchTerms).then((res) => {
			if (cancelSearch) return;

			setSearchResults(
				res.body.tracks.items.map((track) => {
					const smallestAlbumArt = track.album.images.reduce(
						(smallest, image) => {
							if (image.height < smallest) return image;
							return smallest;
						},
						track.album.images[0]
					);

					const trackArtists = track.artists.map((artist) => {
						return artist.name;
					});

					return {
						artistNames: trackArtists,
						title: track.name,
						uri: track.uri,
						albumUrl: smallestAlbumArt.url,
					};
				})
			);
		});

		return () => (cancelSearch = true);
	}, [searchTerms, accessToken]);

	return (
		<Container className='d-flex flex-column py-2' style={{ height: "100vh" }}>
			<Form.Control
				placeholder='Search Songs/Artists'
				type='search'
				value={searchTerms}
				onChange={(e) => setSearchTerms(e.target.value)}
			></Form.Control>
			<div className='flex-grow-1 my-2' style={{ overflowY: "auto" }}>
				{searchResults.map((track) => (
					<TrackSearchResult
						track={track}
						key={track.uri}
						chooseTrack={chooseTrack}
					/>
				))}
				{searchResults.length === 0 && (
					<div className='text-center' style={{ whiteSpace: "pre" }}>
						{lyrics}
					</div>
				)}
			</div>
			<div className='py-2'>
				<SpotifyWebPlayer
					accessToken={accessToken}
					trackUri={playingTrack?.uri}
				/>
			</div>
		</Container>
	);
};

export default DashboardScreen;
