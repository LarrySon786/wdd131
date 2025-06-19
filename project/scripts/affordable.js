//Assigning which variables will appear and where they appear on the HTML page
const year = document.querySelector("#year");
let lastModified = document.querySelector("#modified")

//Displaying the year and my copyright information
const today = new Date();
year.innerHTML = `<span>©${today.getFullYear()} Brandon Richards | Ohio</span>`;

//Displaying the last modified date
let oLastModified = new Date(document.lastModified);
lastModified.innerHTML = `<span>Last Modified: ${oLastModified} </span>`;


//Calculate Average Insurance Cost
const age = document.querySelector('#insurance-age');
const cost = document.querySelector('#expected-cost');
const button = document.querySelector('#insurance-button');

if (button) {
    button.addEventListener('click', function () {
        
        if (age.value.trim() !== "") {
            if (age.value >= 18 && age.value <= 25) {
                cost.value = 445;
            }
            else if (age.value > 25 && age.value <= 32) {
                cost.value = 467;
            }
            else if (age.value > 32 && age.value <= 40) {
                cost.value = 537;
            }
            else if (age.value > 40 && age.value <= 50) {
                cost.value = 682;
            }
            else if (age.value > 50 && age.value <= 60) {
                cost.value = 1001.50;
            }
            else if (age.value > 60) {
                cost.value = 1208;
            }
            else {
                cost.value = "";
            }
            cost.textContent = `On average, the cost of health insurance for someone who is ${age.value} years old is $${cost.value}.`;
            age.focus();
        }
        else {
            cost.value = "";
            cost.textContent = "";
        }
        age.focus();
    }
    )
}


//Record how many different forms they have submitted using local storage
const formSubmissionButton = document.querySelector('#form-submission');
const patientName = document.querySelector('#patient-name');
const patientPhone = document.querySelector('#patient-phone');
const patientEmail = document.querySelector('#patient-email');

let formsBefore = getFormSubmissions() || 0;

if (formSubmissionButton) {
    formSubmissionButton.addEventListener('submit', setFormSubmissions()
    )
}




function setFormSubmissions(formsBefore) {
    formSubmissions = formsBefore + 1;
    localStorage.setItem('formsSubmitted', JSON.stringify(formSubmissions));
    localStorage.setItem('patientName', JSON.stringify(patientName));
    localStorage.setItem('patientPhone', JSON.stringify(patientPhone));
    localStorage.setItem('patientEmail', JSON.stringify(patientEmail.value));

}

function getFormSubmissions() {
    return JSON.parse(localStorage.getItem('formsSubmitted'));
    // if (formsSubmissions === null || formsSubmissions === undefined) {
    //     return 0;
    // }
    // else {
    //     return formsSubmissions;
    // }
}





