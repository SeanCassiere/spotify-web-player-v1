import React from "react";

import { Badge } from "react-bootstrap";

const TrackSearchResult = ({ track, chooseTrack }) => {
	const handlePlay = () => {
		chooseTrack(track);
	};

	return (
		<div
			className='d-flex m-2 align-items-center'
			style={{ cursor: "pointer" }}
			onClick={handlePlay}
		>
			<img
				src={track.albumUrl}
				style={{ height: "64px", width: "64px" }}
				alt={track.title}
			/>
			<div className='ml-3'>
				<div>{track.title}</div>
				<div className='text-muted'>
					{track.artistNames.map((artist, i) => (
						<Badge variant='dark' key={i} className='m-1'>
							{artist}
						</Badge>
					))}
				</div>
			</div>
		</div>
	);
};

export default TrackSearchResult;
