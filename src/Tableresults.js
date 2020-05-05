import React from "react";

class Tableresults extends React.Component {
	render() {
		return(
			<div className="tableresults">
			<h3>This is the Tableresults class</h3>
			<p>{this.props.powerresults}</p>
			<table id="resultstable">
			  <thead>
				<tr>
			  		<th>Category</th>
			  		<th>Loudness (db SPL)</th>
			  		<th>Voltage Needed (VRMS)</th>
				</tr>
			   </thead>
			</table>
			</div>
		);
	}
}


export default Tableresults;