import React from "react";

import { Button } from "react-bootstrap";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const Login = () => {
	return (
		<Button variant='success' size='lg' href={AUTH_URL}>
			Login with Spotify
		</Button>
	);
};

export default Login;
