import React from "react";

import useAuth from "../hooks/useAuth";

const DashboardScreen = ({ code }) => {
	const accessToken = useAuth(code);

	return (
		<div>
			<h1>Dashboard</h1>
			<p>{code}</p>
		</div>
	);
};

export default DashboardScreen;
