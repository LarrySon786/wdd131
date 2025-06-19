//Assigning which variables will appear and where they appear on the HTML page
const year = document.querySelector("#year");
let lastModified = document.querySelector("#modified")

//Displaying the year and my copyright information
const today = new Date();
year.innerHTML = `<span>©${today.getFullYear()} Brandon Richards | Ohio</span>`;

//Displaying the last modified date
let oLastModified = new Date(document.lastModified);
lastModified.innerHTML = `<span>Last Modified: ${oLastModified} </span>`;


//Menu Set-up

const navigation = document.querySelector(".navigation");
const hammenu = document.querySelector("#menu");

hammenu.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hammenu.classList.toggle('show');
})





const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Mexico",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Newport Beach",
        location: "Newport Beach, California",
        dedicated: "2005, August, 28",
        area: 17800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/newport-beach-california/400x250/newport-beach-california-temple-1169298-wallpaper.jpg"
    },
    {
        templeName: "Columbus Temple",
        location: "Columbus, Ohio",
        dedicated: "1999, September, 4",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbus-ohio/400x250/columbus-temple-lds-406110-wallpaper.jpg"
    }
  ];

function createTempleCard(filteredTemples) {
    document.querySelector(".temple-cards").innerHTML = "";
    filteredTemples.forEach(temple => {
        let templeCard = document.createElement("section");
        let templeName = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let size = document.createElement("p"); 
        let image = document.createElement("img")

        templeName.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
        size.innerHTML = `<span class="label">Area: </span>${temple.area} square feet`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`)
        image.setAttribute("loading", "lazy");

        templeCard.appendChild(templeName);
        templeCard.appendChild(location);
        templeCard.appendChild(dedicated);
        templeCard.appendChild(size);
        templeCard.appendChild(image);

        document.querySelector(".temple-cards").appendChild(templeCard);
    })
      
  }

const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const smallTemples = document.querySelector("#small");
const largeTemples = document.querySelector("#large");
const home = document.querySelector("#home");


oldTemples.addEventListener("click", () => {
    
    createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) < 1900));
})

newTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) > 2000));
})

smallTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
})

largeTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
})

home.addEventListener("click", () => {
    createTempleCard(temples)
})


createTempleCard(temples);



