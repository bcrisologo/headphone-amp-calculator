# Headphone Power Requirements Calculator Site 

This is a react-based website with the main purpose of calculating power requirements for headphones at different loudness levels.

![](https://github.com/pyfj0911/headphone-amp-calculator/blob/master/public/initial-page.png)

Moreover, the required voltage and current for amplification are presented alongside the required power output from an amplifier.

The two main inputs include: Impedance and Sensitivity of your gear.

* Impedance - given in ohms on your audio specifications
* Sensitivity - a drop down menu allows you to select the sensitivity unit depending on the manufacturer specifications:
  * dB / mW - sensitivity in decibels per 1 milliWatt
  * dB / Vrms - sensitivity in decibels per 1 volt RMS

Leading you to the results as shown below.

![](https://github.com/pyfj0911/headphone-amp-calculator/blob/master/public/results-page.png)


Calculations have been derived from [Apex Hifi](http://www.apexhifi.com/specs.html).


## Setup
```
npm install
```
To run the site, simply use:
```
npm run
```

Particle background has been used from particles-bg by user lindelof. 

You can change the particles effect by simply editing the index.js file and changing the "type" as seen below:
```
<ParticlesBg color="#ffffff" type="cobweb" bg={true} />
```
 You may check his [Github page here](https://github.com/lindelof/particles-bg) for more information on how to use it for your own page.
 
 ## Live Demo
 You can visit the live demo on [this amplify app page](https://master.d1hwjxk45tavzi.amplifyapp.com/).
