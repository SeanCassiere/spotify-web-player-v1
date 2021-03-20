# Spotify Web Player w/ Lyrics

A basic project utilizing the Spotify API and the lyrics-finder API.

### Setup and Run the project

First you'll need to clone the repository.

```
# Use SSH (if set up)...
git clone ggit@github.com:SeanCassiere/spotify-web-player-v1.git YOUR_FOLDER

# ...or use HTTPS and switch remotes later.
git clone https://github.com/SeanCassiere/git@github.com:SeanCassiere/spotify-web-player-v1.git YOUR_FOLDER
```

Once the repo is cloned, be sure to setup your environment variables (`.env`) file. You can find out the data to be added in this file, by checking out the example file provided `.env.example`.

For the Spotify API Client ID and Secret, you can obtain it from their [developer portal](https://developer.spotify.com/).

After completing the steps above, you'll need to install the files necessary node modules

```
# You'll need to run the installs in the following 3 locations
npm or yarn installs

# 1. In the root folder
cd ./

# 2. Move into the client folder and install
cd client

# 3. Move into the server folder and install
cd server
```

Once installation is complete, in the root folder run the following script.

```
npm run dev

 - or -

yarn run dev
```

Enjoy!
