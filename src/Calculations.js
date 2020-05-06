// Calculation Functions and Constants used
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

export function voltageCalculation(power, impedance) {
	console.log(power, impedance);
	return Math.sqrt(power / 1000 * impedance)
}

export function currentCalculation(power, impedance) {
	return Math.sqrt(power / (1000 * impedance)) * 1000
}