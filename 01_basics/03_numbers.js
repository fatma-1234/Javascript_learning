// Numbers 

const score = 400
// javascript automatically detect that this score type should be number . 
console.log(score);

const balance = new Number(100)
// here specialy caste that this is a number .
console.log(balance);


// a method for using toString() and when we checked the type of its got  string 
console.log(balance.toString().length);

// fixed property me function me hmesha number hi dete hain ..
console.log(balance.toFixed(2)); 
// 100.00
console.log(balance.toFixed(1)); 
// 100.0
console.log(balance.toFixed(4).length); 
// 8

const anotherNumber = 123.8789
console.log(anotherNumber.toPrecision(3))
// 124
const anotherNumber2 = 1234.876767
console.log(anotherNumber2.toPrecision(3))


const hundreds = 10000000
console.log(hundreds.toLocaleString()) 
// by usually US standards 

const hundreds1 = 100000000
console.log(hundreds1.toLocaleString('en-IN'))

// ************Math************

console.log(Math);
console.log(Math.abs(-4));
// it will return in absolute value (positive value )
console.log(Math.round(4.87879876));
// will return round off 

// if we want to choose that round off should be upper value or lower value 

// 1) ceil  => will choose upper value 
// 2) floor => will choose lower value 

console.log(Math.ceil(4.2));
console.log(Math.floor(4,9));
console.log(Math.min(3,5,6,1,7,9));
console.log(Math.max(8,9,4,3,2,1));

console.log(Math.random());








