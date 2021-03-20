import React from "react";

import { Container } from "react-bootstrap";

import Login from "../components/Login";

const LoginScreen = () => {
	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ minHeight: "100vh" }}
		>
			<Login />
		</Container>
	);
};

export default LoginScreen;
