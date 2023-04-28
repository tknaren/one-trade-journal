import React, { Component, useState, useEffect, useMemo } from "react";
import { Fragment } from "react";
import { AgGridReact } from "ag-grid-react";
import { getWeeklyScanResults } from "./../../services/weeklyscanService";

class WeeklyScan extends Component {
	state = {
		rowData: getWeeklyScanResults(),
		columndefs: [
			{ field: "date" },
			{ field: "type" },
			{ field: "instrument" },
			{ field: "slPips" },
			{ field: "tpPips" },
			{ field: "stake" },
			{ field: "maxPips" },
			{ field: "pnl" },
			{ field: "netPnL" },
			{ field: "runningBal" },
		],
		defaultColDef: { sortable: true, filter: true },
	};
	render() {
		return (
			<div className="ag-theme-alpine" style={{ height: 500 }}>
				<AgGridReact
					rowData={this.state.rowData}
					columnDefs={this.state.columndefs}
					defaultColDef={this.state.defaultColDef}
				/>
			</div>
		);
	}
}

export default WeeklyScan;
/*
function WeeklyScan() {
	const [rowData, setRowData] = useState([]);

	const [columndefs, setColDef] = useState([
		{ field: "date" },
		{ field: "type" },
		{ field: "instrument" },
		{ field: "slPips" },
		{ field: "tpPips" },
		{ field: "stake" },
		{ field: "maxPips" },
		{ field: "pnl" },
		{ field: "netPnl" },
		{ field: "runningBal" },
	]);

	useEffect(() => {
		fetch("../services/Snippers.json")
			.then((result) => result.json())
			.then((rowData) => setRowData(rowData))
			.catch((error) => console.error(error));
	}, []);

	console.log("props", rowData);

	return (
		<div className="ag-theme-alpine" style={{ height: 500 }}>
			<AgGridReact rowData={rowData} columnDefs={columndefs} />
		</div>
	);
}

export default WeeklyScan;
*/
