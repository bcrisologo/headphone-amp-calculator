import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const impedance = 37;
const sensitivity = 94;

const safe_volume = 85;
const moderate_volume = 100;
const fairlyloud_volume = 110;
const veryloud_volume = 115;
const painful_volume = 120;

/* Functions for power calculations */
function powerCalculation(sensitivity) {
	let power_safe = 10**((safe_volume - sensitivity) / 10);
	let power_moderate = 10**((moderate_volume - sensitivity) / 10);
	let power_fairlyloud = 10**((fairlyloud_volume - sensitivity) / 10);
	let power_veryloud = 10**((veryloud_volume - sensitivity) / 10);
	let power_painful = 10**((painful_volume - sensitivity) / 10);

	/* Calculations part
	power_safe = 10**((safe_volume - sensitivity) / 10);
	power_moderate = 10**((moderate_volume - sensitivity) / 10);
	power_fairlyloud = 10**((fairlyloud_volume - sensitivity) / 10);
	power_veryloud = 10**((veryloud_volume - sensitivity) / 10);
	power_painful = 10**((painful_volume - sensitivity) / 10);
	*/
		
	/*
	return (
		power_safe.toPrecision(2)
	)
	*/
	return {
		power_safe: power_safe(),
	}
}

const elemental = (
	<h3>
	 Safe volume is at: {powerCalculation(sensitivity)} dB SPL
	</h3>
);


/* Sample Code tested working
function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'Harper',
	lastName: 'Perez'
};

const element = (
	<h1>
	 Hello, {formatName(user)}!
	</h1>
);
*/

ReactDOM.render(
	elemental,
	document.getElementById('root')
);