import React from 'react';
import ReactDOM from 'react-dom';
import {volumes, powerCalculation_mws, powerCalculation_vrms,
	voltageCalculation, currentCalculation} from './Calculations.js';
import Tableresults from './Tableresults.js';
import ParticlesBg from 'particles-bg';
import './index.css';

class InputForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			sensitivity: '', 
			impedance: '',
			testpower: '',
			powerentry: 'mw',
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
			[name]: value
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
		let powerentry = this.state.powerentry;

		let power_safe = '';
		let power_moderate = '';
		let power_fairlyloud = '';
		let power_veryloud = '';
		let power_painful = '';

		// Checks if entries submitted are not numerical
		// Returns an alert message if it fails in any test
		// *** Can use ? operator for optimization
		if(impedance !== '' && sensitivity !== '' && 
			!Number(impedance) && !Number(sensitivity)) {
			// Both entries are non-numbers
			alert("Impedance and Sensitivity entries are not numbers");
		}
			else if (impedance === '') {
				// Impedance is empty
				alert("Impedance is empty");

			}
			else if (sensitivity === '') {
				// Sensitivity is empty
				alert("Sensitivity is empty");
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

		// Sensitivity check and calculation
		switch(powerentry) {
			default:
			  power_safe = powerCalculation_mws(sensitivity, volumes.safe_volume).toPrecision(2);
			  power_moderate = powerCalculation_mws(sensitivity, volumes.moderate_volume).toPrecision(3);
			  power_fairlyloud = powerCalculation_mws(sensitivity, volumes.fairlyloud_volume).toPrecision(4);
			  power_veryloud = powerCalculation_mws(sensitivity, volumes.veryloud_volume).toPrecision(5);
			  power_painful = powerCalculation_mws(sensitivity, volumes.painful_volume).toPrecision(5);
			  break;
			case "vrms":
			  power_safe = powerCalculation_vrms(sensitivity, volumes.safe_volume, impedance).toPrecision(2);
			  power_moderate = powerCalculation_vrms(sensitivity, volumes.moderate_volume, impedance).toPrecision(3);
			  power_fairlyloud = powerCalculation_vrms(sensitivity, volumes.fairlyloud_volume, impedance).toPrecision(4);
			  power_veryloud = powerCalculation_vrms(sensitivity, volumes.veryloud_volume, impedance).toPrecision(5);
			  power_painful = powerCalculation_vrms(sensitivity, volumes.painful_volume, impedance).toPrecision(5);
		}



		// Voltage variables
		let voltage_safe = voltageCalculation(power_safe, impedance).toPrecision(2);
		let voltage_moderate = voltageCalculation(power_moderate, impedance).toPrecision(3);
		let voltage_fairlyloud = voltageCalculation(power_fairlyloud, impedance).toPrecision(4);
		let voltage_veryloud = voltageCalculation(power_veryloud, impedance).toPrecision(4);
		let voltage_painful = voltageCalculation(power_painful, impedance).toPrecision(4);

		// Current variables
		let current_safe = currentCalculation(power_safe, impedance).toPrecision(2);
		let current_moderate = currentCalculation(power_moderate, impedance).toPrecision(4);
		let current_fairlyloud = currentCalculation(power_fairlyloud, impedance).toPrecision(4);
		let current_veryloud = currentCalculation(power_veryloud, impedance).toPrecision(4);
		let current_painful = currentCalculation(power_painful, impedance).toPrecision(4);

		this.setState(state => ({
			isSubmitted: isSubmitted,
			powerentry: powerentry,
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
			<div className="particles">
			  <ParticlesBg color="#ffffff" num={300} type="cobweb" bg={true}/>
			</div>
			<form onSubmit={this.handleSubmit}>
			  <h1>Headphone Amplifier Calculator</h1><br />
			  <p> Do you need an amp? Check the results below </p>
			  <br />
			  <p> Check your headphone specifications and see the results </p>
			  <div class="centered" className="dataentry">
			    <div className="textbox-1">
			    <p> Impedance </p>
				  <input
				    name="impedance"
				    type="text"
				    id="first"
				    placeholder="Ohms"
				    onChange={this.handleChange}
	   			    value={this.state.impedance}
				  />
			    </div>
			    <div className="midgap">
			    </div>
			    <div className="textbox-2">
			    <p> Sensitivity </p>
    			  <input
				    name="sensitivity"
				    type="text"
				    id="second"
				    placeholder="dB / mW"
				    onChange={this.handleChange}
				    value={this.state.sensitivity}
				   />
				  <select 
				    name="powerentry"
				    id="powerentry"
				    onChange={this.handleChange}
				    value={this.state.powerentry}
				  >
				    <option value="mw">db / mW</option>
				    <option value="vrms">db / Vrms</option>
				  </select>
			    </div>
			  </div>
			  <br /> <br />
			    <button
			      type="submit"
			      id="submit"
			      onClick={this.handleSubmit}
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