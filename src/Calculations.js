// Calculation Functions and Constants used


// Target volume constants
export const volumes = {
	safe_volume: 85,
	moderate_volume: 100,
	fairlyloud_volume: 110,
	veryloud_volume: 115,
	painful_volume: 120
};
const { safe_volume, moderate_volume, 
		fairlyloud_volume, veryloud_volume, 
		painful_volume } 
		= volumes;

// Base calculation for Power Requirements in milliWatts (mW)
export function powerCalculation(sensitivity, volume_level) {
	console.log(sensitivity, volume_level);
	return 10 ** ((volume_level - sensitivity) / 10)
}

// Base calculation for Voltage Requirements in Volts Root Mean Square (VRMS)
export function voltageCalculation(power, impedance) {
	console.log(power, impedance);
	return Math.sqrt(power / 1000 * impedance)
}

// Base calculation for Current Requirements in milliAmps (mA)
export function currentCalculation(power, impedance) {
	return Math.sqrt(power / (1000 * impedance)) * 1000
}