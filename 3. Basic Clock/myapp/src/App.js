import React from "react";
import "./styles/app.scss";
import Clock from "./components/Clock";

import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header title="React Simple Clock" />
			<Clock />
		</div>
	);
}

export default App;
