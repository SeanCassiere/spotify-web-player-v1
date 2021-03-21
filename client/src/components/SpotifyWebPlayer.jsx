import React, { useState, useEffect } from "react";

import SpotifyPlayer from "react-spotify-web-playback";

const SpotifyWebPlayer = ({
	accessToken,
	trackUri,
	playingTrack,
	setPlayingTrack,
}) => {
	const [play, setPlay] = useState(false);

	useEffect(() => setPlay(true), [trackUri]);

	if (!accessToken) return null;
	return (
		<SpotifyPlayer
			token={accessToken}
			magnifySliderOnHover
			showSaveIcon
			callback={(s) => {
				if (!s.isPlaying) setPlay(false);
			}}
			play={play}
			uris={trackUri ? [trackUri] : null}
			styles={{
				activeColor: "#fff",
				bgColor: "#333",
				color: "#fff",
				loaderColor: "#fff",
				sliderColor: "#1cb954",
				trackArtistColor: "#ccc",
				trackNameColor: "#fff",
			}}
		/>
	);
};

export default SpotifyWebPlayer;
