import React from "react";
//import "./index.css"

class Tableresults extends React.Component {
	render() {
		return(
			<div className="tableresults">
			<h3>Power Requirements per Loudness in dB SPL</h3>
			  <table class="center" className="tableouter">
			    <thead>
				  <tr>
			  		<th>Category</th>
			  		<th>Loudness (db SPL)</th>
			  		<th> Voltage Needed (VRMS)</th>
			  		<th>Current needed (mA)</th>
			  		<th>Power Needed (mW)</th>
				  </tr>
			     </thead>
			    <tbody>
			    <tr>
			      <td>Safe</td>
			      <td>85</td>
			      <td>{this.props.voltage_safe}</td>
			      <td>{this.props.current_safe}</td>
			      <td>{this.props.power_safe}</td>
			    </tr>
			    <tr>
			      <td>Moderate</td>
			      <td>100</td>
			      <td>{this.props.voltage_moderate}</td>
			      <td>{this.props.current_moderate}</td>
			      <td>{this.props.power_moderate}</td>
			    </tr>
			    <tr>
			      <td>Fairly Loud</td>
			      <td>110</td>
			      <td>{this.props.voltage_fairlyloud}</td>
			      <td>{this.props.current_fairlyloud}</td>
			      <td>{this.props.power_fairlyloud}</td>
			    </tr>
			    <tr>
			      <td>Very Loud</td>
			      <td>115</td>
			      <td>{this.props.voltage_veryloud}</td>
			      <td>{this.props.current_veryloud}</td>
			      <td>{this.props.power_veryloud}</td>
			    </tr>
			    <tr>
			      <td>Painfully Loud</td>
			      <td>120</td>
			      <td>{this.props.voltage_painful}</td>
			      <td>{this.props.current_painful}</td>
			      <td>{this.props.power_painful}</td>
			    </tr>
			    </tbody>
			  </table>
			  <br />
			  <p id="sources"><span>Calculations Source is from <a href="http://www.apexhifi.com/specs.html">Apex Hifi
			    </a></span>
			  </p>
			</div>
		);
	}
}


export default Tableresults;