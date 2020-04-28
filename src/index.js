import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// declaring default volume levels in db PL
const safe_volume = 85;
const moderate_volume = 100;
const fairlyloud_volume = 110;
const veryloud_volume = 115;
const painful_volume = 120;

/* Functions for power calculations */
function powerCalculation(sensitivity) {
	var power_safe;
	var power_moderate;
	var power_fairlyloud;
	var power_veryloud;
	var power_painful;

	power_safe = 10**((safe_volume - sensitivity) / 10)
	power_moderate = 10**((moderate_volume - sensitivity) / 10)
	power_fairlyloud = 10**((fairlyloud_volume - sensitivity) / 10)
	power_veryloud = 10**((veryloud_volume - sensitivity) / 10)
	power_painful = 10**((painful_volume - sensitivity) / 10)
		
	return {
		power_safe : power_safe,
		power_moderate : power_moderate,
		power_fairlyloud : power_fairlyloud,
		power_veryloud : power_veryloud,
		power_painful : power_painful
	}
}

class HeadphoneSpecs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			impedance: '',
			sensitivity: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		// Need for multiple events
		// const name = target.name;
		// const value = event.target.value;
		/*
		this.setState({
			[name]: value
		});
		*/
	}

	handleSubmit(event) {
		// Need for multiple submits
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			  <label>
			    <h3> Headphone Impedance (Ohms): </h3>
			    <input 
			      name="impedance"
			      type="text" 						// need to be able to convert text to number
			      ref="impedance"
			      value={this.state.value}
			      onChange={this.handleChange}
			    />
			  </label>
			  <label>
			    <h3> Headphone Sensitivity (dB SPL / mW): </h3>
			    <input
			      name="sensitivity"
			      type="text"						// need to be able to convert text to number
			      ref="sensitivity"
			      value={this.state.value}
			      onChange={this.handleChange}
			    />
			  </label>
			  <input 
			    type="submit"
			    value="Submit"
			  />
			</form>
			);
	}
}

ReactDOM.render(
	<HeadphoneSpecs />,
	document.getElementById('root')
);