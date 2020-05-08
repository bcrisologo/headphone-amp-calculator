import React from 'react';
import ReactDOM from 'react-dom';
import {volumes, powerCalculation, 
	voltageCalculation, currentCalculation} from './Calculations.js';
import Tableresults from './Tableresults.js';
import './index.css';


class InputForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			sensitivity: '', 
			impedance: '',
			isSubmitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	 handleChange(event) {
		// Logging purposes
		console.log(event)
		console.log(event.target.name)
		console.log(event.target.value)

		let {value, name} = event.target;

		this.setState({
			[name]: value,
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
		let isSubmitted = this.state.isSubmitted;

		// Checks if entries submitted are not numerical
		// Returns an alert message if it fails in any test
		// *** Can use ? operator for optimization
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
		else {
			isSubmitted = true;
		}

		// Power variables
		let power_safe = powerCalculation(sensitivity, volumes.safe_volume).toPrecision(2);
		let power_moderate = powerCalculation(sensitivity, volumes.moderate_volume).toPrecision(3);
		let power_fairlyloud = powerCalculation(sensitivity, volumes.fairlyloud_volume).toPrecision(4);
		let power_veryloud = powerCalculation(sensitivity, volumes.veryloud_volume).toPrecision(5);
		let power_painful = powerCalculation(sensitivity, volumes.painful_volume).toPrecision(5);

		// Voltage variables
		let voltage_safe = voltageCalculation(powerCalculation(sensitivity,volumes.safe_volume), impedance).toPrecision(2);
		let voltage_moderate = voltageCalculation(powerCalculation(sensitivity,volumes.moderate_volume), impedance).toPrecision(3);
		let voltage_fairlyloud = voltageCalculation(powerCalculation(sensitivity,volumes.fairlyloud_volume), impedance).toPrecision(4);
		let voltage_veryloud = voltageCalculation(powerCalculation(sensitivity,volumes.veryloud_volume), impedance).toPrecision(4);
		let voltage_painful = voltageCalculation(powerCalculation(sensitivity,volumes.painful_volume), impedance).toPrecision(4);

		// Current variables
		let current_safe = currentCalculation(powerCalculation(sensitivity,volumes.safe_volume), impedance).toPrecision(2);
		let current_moderate = currentCalculation(powerCalculation(sensitivity,volumes.moderate_volume), impedance).toPrecision(4);
		let current_fairlyloud = currentCalculation(powerCalculation(sensitivity,volumes.fairlyloud_volume), impedance).toPrecision(4);
		let current_veryloud = currentCalculation(powerCalculation(sensitivity,volumes.veryloud_volume), impedance).toPrecision(4);
		let current_painful = currentCalculation(powerCalculation(sensitivity,volumes.painful_volume), impedance).toPrecision(4);

	
		this.setState(state => ({
			isSubmitted: isSubmitted,
			impedance: impedance,
			sensitivity: sensitivity,
			power_safe: power_safe,
			power_moderate: power_moderate,
			power_fairlyloud: power_fairlyloud,
			power_veryloud: power_veryloud,
			power_painful: power_painful,
			voltage_safe: voltage_safe,
			voltage_moderate: voltage_moderate,
			voltage_fairlyloud: voltage_fairlyloud,
			voltage_veryloud: voltage_veryloud,
			voltage_painful: voltage_painful,
			current_safe: current_safe,
			current_moderate: current_moderate,
			current_fairlyloud: current_fairlyloud,
			current_veryloud: current_veryloud,
			current_painful: current_painful,
		}));
	}

	render(){
		return (
			<div className="initialpage">
			<form onSubmit={this.handleSubmit}>
			  <h1>Headphone Amplification Calculator</h1><br />
			  <p> Welcome to the Amplification Calculator page!</p>
			  <br />
			  <p> Check the headphone specifications and see the results </p>
			  <div className="dataentry">
			    <div class="textbox-1">
			    <p> Impedance </p>
				  <input
				    name="impedance"
				    type="text"
				    id="first"
				    placeholder="Ohms"
				    onChange={this.handleChange}
	   			    value={this.state.impedance}
				  />
				  {this.state.errormessageone}
			    </div>
			    <div class="textbox-2">
			    <p> Sensitivity </p>
    			  <input
				    name="sensitivity"
				    type="text"
				    id="second"
				    placeholder="dB / mW"
				    onChange={this.handleChange}
				    value={this.state.sensitivity}
				   />
   				   {this.state.errormessagetwo}
			    </div>
			  </div>
			  <br /> <br />
			    <button 
			      type="submit"
			      id="submit"
			      >Calculate
			    </button>
			  <br /><br />
			</form>
			  <div>
			  {this.state.isSubmitted &&
			    <Tableresults 
			    power_safe={this.state.power_safe} 
			    power_moderate={this.state.power_moderate}
			    power_fairlyloud={this.state.power_fairlyloud}
			    power_veryloud={this.state.power_veryloud}
			    power_painful={this.state.power_painful}
			    voltage_safe={this.state.voltage_safe}
			    voltage_moderate={this.state.voltage_moderate}
			    voltage_fairlyloud={this.state.voltage_fairlyloud}
			    voltage_veryloud={this.state.voltage_veryloud}
			    voltage_painful={this.state.voltage_painful}
			    current_safe={this.state.current_safe}
			    current_moderate={this.state.current_moderate}
			    current_fairlyloud={this.state.current_fairlyloud}
			    current_veryloud={this.state.current_veryloud}
			    current_painful={this.state.current_painful}
			    />
			  }
			  </div>
			</div>
		);
	}
}


ReactDOM.render(
	<InputForm />,
	document.getElementById('root')
);