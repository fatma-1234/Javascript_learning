// Array Specific loops :)
// database se koi bhi value agar fetch karna ho toh arry loops mostly use karte hain ..


// for of  array specific loops 

// ["", "" , ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world "
// for (const greet of greetings) {
//     console.log('Each char is ${greet}')
    
// }

// Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of America ")
map.set('FR', "France")

console.log(map);

for (const [key , value] of map) {
    console.log(key, ':-' , value);
    
}

const myObject = {
    'game1':'NFS',
    'game2': 'spiderman '
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);

    
}


