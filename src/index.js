import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*
// This was a test code
const elemental = (
	<h1 className="greeting">
	 Hello There
	</h1>
)

*/
class Trial extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			sensitivity: '', 
			impedance: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;

		// Checking if values are not numerical
		// if (!Number(value)) {
		//	alert("Entry must be numerical");
		//}

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		let impedance = this.state.impedance;
		let sensitivity = this.state.sensitivity;

		// Checks if entries submitted are not numerical
		if(!Number(impedance) && !Number(sensitivity)) {
			alert("Impedance and Sensitivity entries are not numbers");
		}
			else if(!Number(impedance)) {
				alert("Impedance entry is not a number");
			}
			else if(!Number(sensitivity)) {
				alert("Sensitivity entry is not a number");
			}
		else {
			return;
		}
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
			  <h1> Thanks for coming to the headphone amp page </h1><br />
			  <h3> Headphone Impedance is {this.state.impedance} </h3><br />
			  <h3> Headphone Sensitivity is {this.state.sensitivity} </h3><br />
			  <p> Impedance: </p>
			  <input
			    name="impedance"
			    type="text"
			    id="impedance"
			    onChange={this.handleChange}
			  />
			  <p> Sensitivity (db SPL / mW): </p>
			  <input
			    name="sensitivity"
			    type="text"
			    id="sensitivity"
			    onChange={this.handleChange}
			  />
			  <br /> <br />
			  <input type="submit" />
			</form>
		);
	}
}


const impedance = 37;
const sensitivity = 94;

/* Volume sets at constant
const safe_volume = 85;
const moderate_volume = 100;
const fairlyloud_volume = 110;
const veryloud_volume = 115;
const painful_volume = 120;
*/

var volumes = {
	safe_volume : 85,
	moderate_volume : 100,
	fairlyloud_volume : 110,
	veryloud_volume : 115,
	painful_volume : 120
};


// Base power calculator function
function powerCalculation(sensitivity, volume_level) {
	return 10**((volume_level - sensitivity) / 10);
}


// Printing out volumes array
for(var index in volumes) {
	//document.write( index + " : " + volumes[index] + " dB SPL" + "<br />");
	document.write(index + " : " + volumes[index] + " dB SPL" + "<br />");
}

// Printing out calculated power calculations from the volumes array
document.write( "<br />")		// just putting space between
for(var index in volumes) {
	document.write( powerCalculation(sensitivity, volumes[index]).toPrecision(3) + " mW" + "<br />" );
}


ReactDOM.render(
	<Trial />,
	document.getElementById('root')
);