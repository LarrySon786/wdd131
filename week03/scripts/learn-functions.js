
let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last){
    return `${first} ${last}`;
}

const fullName = function (first, last) {
    return `${first} ${last}`;
}

const fullName2 = (fir, las) => `${first} ${last}`;


document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);



