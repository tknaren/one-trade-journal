import React, { Component } from "react";
import Layout from "./components/layout/layout";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
	return (
		<div className="App">
			<Layout></Layout>
		</div>
	);
}

export default App;
