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

	render(){
		return (
			<div>
			  <h1>Hellow There</h1>
			</div>
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
	document.write( index + " : " + volumes[index] + " dB SPL" + "<br />");
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