import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tableresults from './Tableresults.js'


// Array for target volumes in dB SPL
const volumes = {
	safe_volume: 85,
	moderate_volume: 100,
	fairlyloud_volume: 110,
	veryloud_volume: 115,
	painful_volume: 120
};
const { safe_volume, moderate_volume, fairlyloud_volume, veryloud_volume, painful_volume } = volumes;

// Base power calculator function
function powerCalculation(sensitivity, volume_level) {
	return 10 ** ((volume_level - sensitivity) / 10)
}


class InputForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			sensitivity: '', 
			impedance: '',
			powerresults: '',
			errormessageone: '',
			errormessagetwo: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// powerCalculation(sensitivity, volume_level) {
	// 	return 10**((volume_level - sensitivity) / 10);
	// }

	handleChange(event) {
		//let name = event.target.name;
		//let value = event.target.value;

		// Logging purposes
		console.log(event)
		console.log(event.target.name)
		console.log(event.target.value)

		let {value, name} = event.target;
		let {errone, errtwo} = '';

		// Displays an error on the side of the input box
		// when the entry is non-numerical
		// *** Can use ? operator when optimizing the IF statements
		if(name === "impedance") {
			if(value !== "" && !Number(value)) {
				// Displays error for Impedance
				errone = "  Impedance must be a number";
			}
		}
		if(name === "sensitivity") {
			if(value !== "" && !Number(value)) {
				// Displays error for Sensitivity
				errtwo = "  Sensitivity must be a number";
			}
		}	

		this.setState({
			[name]: value,
			errormessageone: errone,
			errormessagetwo: errtwo
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		// Logging purposes
		const data = this.state;
		console.log(data)

		// Assigning the local variables to input
		let impedance = this.state.impedance;
		let sensitivity = this.state.sensitivity;

		// Checks if entries submitted are not numerical
		// Returns an alert message
		// Can use ? operator when optimizing
		if(impedance !== '' && sensitivity !== '' && 
			!Number(impedance) && !Number(sensitivity)) {
			// Both entries are non-numbers
			alert("Impedance and Sensitivity entries are not numbers");
		}
			else if(impedance !== '' && !Number(impedance)) {
				// Impedance is not a number
				alert("Impedance entry is not a number");
			}
			else if(sensitivity !== '' && !Number(sensitivity)) {
				// Sensitivity is not a number
				alert("Sensitivity entry is not a number");
			}
			else if(impedance === '' && sensitivity === '') {
				// Empty field
				return;
			}
	
		this.setState(state => ({
			impedance: this.state.impedance,
			sensitivity: this.state.sensitivity,
			powerresults: 
			'The result is ' + powerCalculation(sensitivity, volumes.safe_volume).toPrecision(2) + ' mW'
		}));
	}

	render(){

		//const powerresults = '';

		return (
			<div className="initialpage">
			<form onSubmit={this.handleSubmit}>
			  <h1> Thanks for coming to the headphone amp calculator page </h1><br />
			  <h3> Headphone Impedance is {this.state.impedance} </h3><br />
			  <h3> Headphone Sensitivity is {this.state.sensitivity} </h3><br />
			  <p> Impedance (Ohms): </p>
			  <input
			  	name="impedance"
			    className="impedance"
			    type="text"
			    placeholder="Impedance"
			    onChange={this.handleChange}
   			    value={this.state.impedance}
			  />
			  {this.state.errormessageone}
			  <p> Sensitivity (db SPL / mW): </p>
			  <input
			  	name="sensitivity"
			    className="sensitivity"
			    type="text"
			    placeholder="Sensitivity"
			    onChange={this.handleChange}
			    value={this.state.sensitivity}
			  />
			  {this.state.errormessagetwo}
			  <br /> <br />
			  <button 
			    type="submit"
			    className="submit"
			    >Calculate
			  </button>
			  <br /><br />
			</form>
			  <div>
			    <Tableresults powerresults={this.state.powerresults} />
			  </div>
			</div>
		);
	}
}

/*
			    <PowerOutput
			      powerresults={this.state.powerresults}
			      />
*/
/*
class PowerOutput extends React.Component {

	render() {
		return(
			<div className="power-results">
			<p>{this.props.powerresults}</p>
			<table className="table-results">
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
*/
ReactDOM.render(
	<InputForm />,
	document.getElementById('root')
);

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