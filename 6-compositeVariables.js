let numbers = [5, 8, 2, 9, 3];
numbers.push(1);
numbers.sort();

console.log(numbers);

// for(let position = 0; position < numbers.length; position++) { 
//     console.log(`The position ${position} has the value ${numbers[position]}`); 
// };

// OR

for(let position in numbers) {
    console.log(`The position ${position} has the value ${numbers[position]}`);
};

let pos = numbers.indexOf(8); //  Finding a specific element

if(pos == -1) {
    console.log('The value was not found.');
} else {
    console.log(`The value 6 is at the position ${pos}`);
}


// console.log(`Your vector has ${numbers.length} elements.`);
// console.log(`The first one is ${numbers[0]}`);
// console.log(`The last one is ${numbers[4]}`);