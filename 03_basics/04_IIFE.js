// Immediatlyinvoked function Expressions  (IIFE) =

// function chai(){
//     console.log('DB connected ');
// }

// chai()

// IIFE 

(function chai(){
    console.log('DB connected ');
})();
//  global scope ke pollution se problem hoti hai kai baar , toh uss global scope ke vairable ya declarataion hain 
// uske pollution ko hatane se ke liye IIFE use karte hain 

( (name) =>  {
    console.log('DB connected two ${name}');
})('sara')
