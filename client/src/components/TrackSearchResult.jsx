import React from "react";

import { Badge, Media } from "react-bootstrap";

const TrackSearchResult = ({ track, chooseTrack }) => {
	const handlePlay = () => {
		chooseTrack(track);
	};

	return (
		<Media className='m-2'>
			<img
				src={track.albumUrl}
				width={64}
				height={64}
				className='mr-3'
				alt={track.title}
				onClick={handlePlay}
				style={cursorStyle}
			/>
			<Media.Body>
				<h6 onClick={handlePlay} className='p2' style={cursorStyle}>
					{track.title}
				</h6>
				<div>
					{track.artistNames.map((artist, i) => (
						<Badge
							variant={i === 0 ? "primary" : "dark"}
							key={i}
							className='m-1'
						>
							{artist}
						</Badge>
					))}
				</div>
			</Media.Body>
		</Media>
	);
};

const cursorStyle = { cursor: "pointer" };

export default TrackSearchResult;
