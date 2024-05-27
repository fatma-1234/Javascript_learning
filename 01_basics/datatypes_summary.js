// types of data types 
// Primitive 
// Non Primitive data type 

// Primitive  => 7 Types (call by value)
// 7 types => 
// 1) String,
// 2) Number,
// 3) Boolean ,
// 4) null,
// 5) undefined ,
// 6) Symbol(value ko unique bnane ke liye symbol ka use krte hain.) ,
// 7) BigInt 

// const score = 100 
// const score = false 


// java script is dynamically typed 

// const score = 100
// const scorevalue =  100.3


// const IsloggedIn= false 
// const outsideTemp= null
// let userEmail; 

// Reference (Non primitive)
// Array , Objects , Function
// const heros= ["Mohammad", "Papa", "me"];
// let myObj = {
//     name:"sara",
//     age: 22,
// }

// function(){} syntax of function 

// const myFunction = function(){
//     console.log("Hello world")



// console.log(typeof bigNumber);

// satck (primitive ), Heap (non-primitive )
//  jitne bhi primitive type data type honge waha stack memory use hoti hai ...

// let myyoutubename = "sarafatma674"
// let anothername = myyoutube 


 






// Reference Type (Non premitive) 
// 1) Array 
// 2) Objects 
// 3) Functions 
//  
// ******************************Memory ************************************

// 1) stack Memory => jitne bhi primitive type hain waha pe stack memory use hoti hai ...
// jab bhi stack memory use hoti hai iska matlab ye hai ki jo bhi variable declare kiya hai uska ek copy milta hai ..

// 2) Heap Memory => jitne bhi non primitive type hain waha pe heap memory use hoti hai ...
// jab bhi heap memory use hoti hai iska matlab hai ki wahan se original value milti hai , or reference kah sakte hain 
// jo bhi change krenge original value me change hoga 


let myyoutubeName= "sarafatma674@gmail.com"

let anotherName = myyoutubeName
anotherName = "sarafatma67"
console.log(anotherName);
console.log(myyoutubeName);


let userone = {
    email: "fatmasara918@gmail.com",
    upi: "user@ybl"

}

let usertwo = userone 

usertwo.email = "hitesh@google.com"

console.log(userone.email);
console.log(usertwo.email);
