const score = 400
console.log(score);

const baalnce = new Number(100) // We defined the Variable type as Number
console.log(baalnce); 

console.log(baalnce.toString().length);
console.log(baalnce.toFixed(2)) // This will limit upto 2 decimal places, useful for e-comm application

const othernumber = 112.8966
console.log(othernumber.toPrecision(4)) // To get precise output

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // To get comma as per Indian Number system

// +++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++ 

// console.log(Math);
// console.log(Math.abs(-12)); // Just changes to Absolute value i.e removes sign
// console.log(Math.round(4.6)) // Round-offs the value
// console.log(Math.ceil(4.6)) // Take to upper value
// console.log(Math.floor(4.6)) // Take to lower value

console.log(Math.random()); // This produces value random value Btw 0 & 1 
console.log(Math.random()*10 +1); // This will ensure the value is atleast greater than 1 & nvr 0
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
