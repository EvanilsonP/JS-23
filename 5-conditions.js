// let age = 16;

// if(age >= 16) {
//     console.log('You can drive.');
// } else (
//     console.log('You cannot drive.')
// );

// let speed = 60;

// if(speed >= 60) {
//     console.log('You have exceeded the permitted speed limit. Fined.')
// } else {
//     console.log('Drive always carefully.');
// }

// let country = 'BR';
// console.log(`Living in ${country}`);

// if(country == 'BR') {
//     console.log('You are a Brazilian.');
// } else {
//     console.log('You are a foreigner.');
// }

function nacionality() {
    let country = document.getElementById('country');
    let result = document.getElementById('result');
    let nation = country.value;

    result.innerHTML = `You are ${nation}`
};

