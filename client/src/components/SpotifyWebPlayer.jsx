import React, { useState, useEffect } from "react";

import SpotifyPlayer from "react-spotify-web-playback";

const SpotifyWebPlayer = ({ accessToken, trackUri }) => {
	const [play, setPlay] = useState(false);

	useEffect(() => setPlay(true), [trackUri]);

	if (!accessToken) return null;
	return (
		<SpotifyPlayer
			token={accessToken}
			showSaveIcon
			callback={(s) => {
				if (!s.isPlaying) setPlay(false);
			}}
			play={play}
			uris={trackUri ? [trackUri] : null}
		/>
	);
};

export default SpotifyWebPlayer;
