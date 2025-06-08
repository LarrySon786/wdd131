//Assigning which variables will appear and where they appear on the HTML page
const year = document.querySelector("#year");
let lastModified = document.querySelector("#modified");

//Displaying the year and my copyright information
const today = new Date();
year.innerHTML = `<span>©${today.getFullYear()} Brandon Richards | Ohio</span>`;

//Displaying the last modified date
let oLastModified = new Date(document.lastModified);
lastModified.innerHTML = `<span>Last Modified: ${oLastModified} </span>`;


// let productsList = ["cheese", "beef", "eggs"];
const productsList = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
  ];
let products = document.querySelector("options");

productsList.forEach(product => {
    const newProducts = document.createElement("option");

    newProducts.textContent = product.name;
    newProducts.setAttribute("value", product.id);
    newProducts.setAttribute("id", product.id);
    // products.appendChild(newProducts)
    document.querySelector("#options").appendChild(newProducts);
});

let counter = document.querySelector("#counter");

let totalCount = getReviewCount() || 0

counter.addEventListener('click', function () {
    totalCount = totalCount + 1;
    setReviewCount();
    
})

function setReviewCount() {
    localStorage.setItem('totalNumberOfReviews', JSON.stringify(totalCount));
}

function getReviewCount() {
    return JSON.parse(localStorage.getItem('totalNumberOfReviews'));
}







