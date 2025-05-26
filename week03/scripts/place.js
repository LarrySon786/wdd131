
//Assigning which variables will appear and where they appear on the HTML page
const year = document.querySelector("#year");
let lastModified = document.querySelector("#modified");

//Displaying the year and my copyright information
const today = new Date();
year.innerHTML = `<span>©${today.getFullYear()} Brandon Richards | Ohio</span>`;

//Displaying the last modified date
let oLastModified = new Date(document.lastModified);
lastModified.innerHTML = `<span>Last Modified: ${oLastModified} </span>`;


//Windchill factor display and calculation
function calculateWindChill(temperatureC, windSpeed) {
    return (13.12 + (0.6215 * (temperatureC))) - (11.37 * (windSpeed ** 0.16)) + ((0.3965 * (temperatureC)) * (windSpeed ** 0.16));
}

const windChillFactor = document.querySelector("#wind-chill");
let temperature = 9.4;
let windSpeed = 11;

if (windSpeed > 4.8 && temperature < 10) {
    windChillFactor.innerHTML = calculateWindChill(temperature, windSpeed).toFixed(2);
}
else {
    windChillFactor.innerHTML = "N/A";
}








