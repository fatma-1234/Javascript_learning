const user = {
    username : "sara",
    price : 999, 

    // this => current context ko refer karta hai ..
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);

    }
}
// user.welcomeMessage()

// here we changed the cotext means value ..
// user.username = "sam"
// user.welcomeMessage()
console.log(this);

// function chai(){
//     let username = "sara"
//     console.log(this.username);
// }
// this function is not working in function only working in object ..
// chai()

// Arrow functon 
const chai = () => {
    let username = "hitesh"
    console.log(this);


}

// () => Arrow function 
//  !st Method = (Explicit Return )
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// 2nd methos to print (Implicit Return)
// const addTwo = (num1, num2) => (num1 + num2)



console.log(addTwo(5, 7))





