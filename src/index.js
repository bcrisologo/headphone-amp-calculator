import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var volumes = {
	safe_volume : 85,
	moderate_volume : 100,
	fairlyloud_volume : 110,
	veryloud_volume : 115,
	painful_volume : 120
};

// Test inputs
// const impedance = 37;
// const sensitivity = 94;

// Base power calculator function
function powerCalculation(sensitivity, volume_level) {
	return 10**((volume_level - sensitivity) / 10);
}


class Trial extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			sensitivity: '', 
			impedance: '',
			errormessageone: '',
			errormessagetwo: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	powerCalculation(sensitivity, volume_level) {
		return 10**((volume_level - sensitivity) / 10);
	}

	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;

		let errone = '';
		let errtwo = '';

		// Displays an error on the side of the input box
		// when the entry is non-numerical
		// Displays error for Impedance
		if(name === "impedance") {
			if(value != "" && !Number(value)) {
				errone = "  Impedance must be a number";
			}
		}
		// Displays error for Sensitivity
		if(name === "sensitivity") {
			if(value != "" && !Number(value)) {
				errtwo = "  Sensitivity must be a number";
			}
		}	

		this.setState({
			errormessageone: errone,
			errormessagetwo: errtwo
		});

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		let impedance = this.state.impedance;
		let sensitivity = this.state.sensitivity;

		// Checks if entries submitted are not numerical
		// Returns an alert message
		if(impedance != '' && sensitivity != '' && 
			!Number(impedance) && !Number(sensitivity)) {
			// Both entries are non-numbers
			alert("Impedance and Sensitivity entries are not numbers");
		}
			else if(impedance != '' && !Number(impedance)) {
				// Impedance is not a number
				alert("Impedance entry is not a number");
			}
			else if(sensitivity != '' && !Number(sensitivity)) {
				// Sensitivity is not a number
				alert("Sensitivity entry is not a number");
			}
			else if(impedance === '' && sensitivity === '') {
				// Empty field
				return;
			}
		else {
			// Continue with no errors
			return;
		}
	}

	render(){

		//const {
		//	impedance,
		//	sensitivity
		//} = this.state;

		return (
			<div className="initialpage">
			<form onSubmit={this.handleSubmit}>
			  <h1> Thanks for coming to the headphone amp calculator page </h1><br />
			  <h3> Headphone Impedance is {this.state.impedance} </h3><br />
			  <h3> Headphone Sensitivity is {this.state.sensitivity} </h3><br />
			  <p> Impedance: </p>
			  <input
			  	name="impedance"
			    className="impedance"
			    type="text"
			    //value={impedance}
			    onChange={this.handleChange}
			  />
			  {this.state.errormessageone}
			  <p> Sensitivity (db SPL / mW): </p>
			  <input
			  	name="sensitivity"
			    className="sensitivity"
			    type="text"
			    //value={sensitivity}
			    onChange={this.handleChange}
			  />
			  {this.state.errormessagetwo}
			  <br /> <br />
			  <button type="submit">Enter</button>
			  <br /><br />
			</form>
			</div>
		);
	}
}

class PowerOutput extends React.Component {

	render() {
		return(
			<div className="powerresults">
			<h3>PowerOutput results</h3>
			</div>
		)
	}
}

/* Volume sets at constant
const safe_volume = 85;
const moderate_volume = 100;
const fairlyloud_volume = 110;
const veryloud_volume = 115;
const painful_volume = 120;
*/

// Printing out volumes array
// for(var index in volumes) {
//	document.write(index + " : " + volumes[index] + " dB SPL" + "<br />");
//}

// Printing out calculated power calculations from the volumes array
// document.write( "<br />")		// just putting space between
// for(var index in volumes) {
//	document.write( powerCalculation(sensitivity, volumes[index]).toPrecision(3) + " mW" + "<br />" );
//}


ReactDOM.render(
	<Trial />,
	document.getElementById('root')
);