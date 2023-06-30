// get the two input values of temperature and wind speed
var temp = document.querySelector("#temp").innerHTML;
// console.log(temp);
var speed = document.querySelector("#windspeed").innerHTML;
// console.log(windSpeed);

// check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill
if (temp <= 50 && speed > 3)
{
    // either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements
    var windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    document.querySelector("#windchill").innerHTML = `${Math.round(windChill)}˚C`;
}
else
{
    document.querySelector("#windchill").innerHTML = "N/A";
}