import React from "react";

import { Badge, Media } from "react-bootstrap";

const TrackSearchResult = ({ track, chooseTrack }) => {
	const handlePlay = () => {
		chooseTrack(track);
	};

	return (
		<Media className='m-2' style={cursorStyle} onClick={handlePlay}>
			<img
				src={track.albumUrl}
				width={64}
				height={64}
				className='mr-3'
				alt={track.title}
			/>
			<Media.Body>
				<h6 className='p2'>{track.title}</h6>
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
