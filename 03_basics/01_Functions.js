// Functions

// console.log("H");
// console.log("S");
// console.log("T");
// console.log("R");
// console.log("A");

function sayMyName(){
    console.log("H");
    console.log("S");
    console.log("T");
    console.log("R");
    console.log("A");


}
sayMyName()

// sayMyName => Reference 
//  () => execution 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2); 
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result 
    return number1 + number2
   
}


// addTwoNumbers(3, "4")
// addTwoNumbers(3, "null")
const result= addTwoNumbers(3, 5)
// console.log("Result: ", result);

// More method for taking arguments (which value we are paasing ) aur kitne tarike se value li ja skati hai ..

function loginUserMessage(username = "sam"){
    if(username===undefined){
        console.log("please enter a username ");
        return 

    }
    // above written code are same as this code another method for writing /..
    // if(!username){
    //     console.log("please enter a username ");
    //     return 
    // }
    return `${username} just logged in`

}
// console.log(loginUserMessage("sara"))
// console.log(loginUserMessage())


// ... rest operator  or spread operator 
// function calculateCartPrice(...num1){
//     return num1 
// }
// console.log(calculateCartPrice(200, 300, 500, 700))



function calculateCartPrice(val1, val2, ...num1){
    return num1

}
console.log(calculateCartPrice(200, 300, 500, 700))

const user = {
    username : "sara",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)

// here function calling 
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 500, 800]
function returnSecondValue(getArray){
    return getArray[0]

}
console.log(returnSecondValue(myNewArray));












