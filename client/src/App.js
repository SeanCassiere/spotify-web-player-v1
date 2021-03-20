import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";

const code = new URLSearchParams(window.location.search).get("code");

const App = () => {
	return code ? <DashboardScreen code={code} /> : <LoginScreen />;
};

export default App;
