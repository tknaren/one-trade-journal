import React, { Component } from "react";
import { getJournalEntries } from "./../../services/JournalService";

class Journal extends Component {
	state = {
		journalEntries: getJournalEntries(),
	};
	render() {
		return (
			<table className="table">
				<thead>
					<tr>
						<th>PositionId</th>
						<th>OrderId</th>
						<th>EntryTime</th>
						<th>ExitTime</th>
						<th>Direction</th>
						<th>Size</th>
						<th>Symbol</th>
						<th>EntryPrice</th>
						<th>ExitPrice</th>
						<th>Dividends</th>
						<th>Financing</th>
						<th>RolloverAdj</th>
						<th>Profit-Loss Pips</th>
						<th>Net PL</th>
						<th>Balance</th>
						<th>Stop-Loss Pips</th>
						<th>Target-Profit Pips</th>
						<th>Strategy</th>
					</tr>
				</thead>
				<tbody>
					{this.state.journalEntries.map((je) => (
						<tr>
							<td>{je.positionId}</td>
							<td>{je.orderId}</td>
							<td>{je.entryTime}</td>
							<td>{je.exitTime}</td>
							<td>{je.direction}</td>
							<td>{je.size}</td>
							<td>{je.symbol}</td>
							<td>{je.entryPrice}</td>
							<td>{je.exitPrice}</td>
							<td>{je.dividends}</td>
							<td>{je.financing}</td>
							<td>{je.rolloverAdj}</td>
							<td>{je.plPips}</td>
							<td>{je.netPL}</td>
							<td>{je.balance}</td>
							<td>{je.slPips}</td>
							<td>{je.tpPips}</td>
							<td>{je.strategy}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}

export default Journal;
