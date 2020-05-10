// Calculation Functions and Constants used


// Target volume constants
const volumes = {
	safe_volume: 85,
	moderate_volume: 100,
	fairlyloud_volume: 110,
	veryloud_volume: 115,
	painful_volume: 120
};

// Base calculation for Power Requirements in milliWatts (mW)
// This is if sensitivity is in "db / mW"
function powerCalculation_mws(sensitivity, volume_level) {
	return 10 ** ((volume_level - sensitivity) / 10)
}

// Base calculation for Power Requirements in milliWatts (mW)
// This is if sensitivity is in "db / Vrms"
function powerCalculation_vrms(sensitivity, volume_level, impedance) {
	return 10 ** ((volume_level - (sensitivity - 10 * (Math.log(1000 / impedance)) / Math.log(10))) / 10)
}

// Base calculation for Voltage Requirements in Volts Root Mean Square (VRMS)
function voltageCalculation(power, impedance) {
	return Math.sqrt(power / 1000 * impedance)
}

// Base calculation for Current Requirements in milliAmps (mA)
function currentCalculation(power, impedance) {
	return Math.sqrt(power / (1000 * impedance)) * 1000
}



export {
	volumes,
	powerCalculation_mws,
	powerCalculation_vrms,
	voltageCalculation,
	currentCalculation
}