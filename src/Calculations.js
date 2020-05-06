import React from 'react';

// Base calculation for Power Requirements in milliWatts (mW)
export function powerCalculation(sensitivity, volume_level) {
	console.log(sensitivity, volume_level);
	return 10 ** ((volume_level - sensitivity) / 10)
}

export function voltageCalculation(power, impedance) {
	console.log(power, impedance);
	return Math.sqrt(power / 1000 * impedance)
}

export function currentCalculation(power, impedance) {
	return Math.sqrt(power / (1000 * impedance)) * 1000
}