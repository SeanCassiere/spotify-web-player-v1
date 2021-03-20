import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import SpotifyWebApi from "spotify-web-api-node";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
	const code = req.body.code;
	const spotifyapi = new SpotifyWebApi({
		redirectUri: "http://localhost:3000",
		clientId: process.env.SPOTIFY_CLIENT_ID,
		clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
	});

	spotifyapi
		.authorizationCodeGrant(code)
		.then((data) => {
			res.json({
				accessToken: data.body.access_token,
				refreshToken: data.body.refresh_token,
				expiresIn: data.body.expires_in,
			});
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(400);
		});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
