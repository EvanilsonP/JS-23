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

// function nacionality() {
//     let country = document.getElementById('country');
//     let result = document.getElementById('result');
//     let nation = country.value;

//     result.innerHTML = `You are ${nation}`
// };

// let age = 65;
// console.log(`You are ${age} years old.`);
// if(age < 16) {
//     console.log('Cannot vote.');
// } else if(age < 18 || age >= 65) {
//     console.log('Optional vote.');
// } else {
//     console.log('You can vote.');
// };

// let now = new Date();
// let hour = now.getHours();

// if(hour < 12) {
//     console.log('Good morning, sunshine.');
// } else if(hour < 18) {
//     console.log('Good afternoon');
// } else if(hour < 23) {
//     console.log('Good evening.');
// } else if(hour > 00 || hour < 05) {
//     console.log('Good night.');
// }

let rightNow = new Date();
let dayOfTheWekk = rightNow.getDay();

switch(dayOfTheWekk) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
}