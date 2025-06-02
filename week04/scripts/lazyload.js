//Assigning which variables will appear and where they appear on the HTML page
const year = document.querySelector("#year");
let lastModified = document.querySelector("#modified")

//Displaying the year and my copyright information
const today = new Date();
year.innerHTML = `<span>©${today.getFullYear()} Brandon Richards | Ohio</span>`;

//Displaying the last modified date
let oLastModified = new Date(document.lastModified);
lastModified.innerHTML = `<span>Last Modified: ${oLastModified} </span>`;
