//  Object singleton

// const tinderuser = new Object() => singlton object 
// const tinderuser = {} => Non singleton object 
// console.log(tinderuser);

const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name ="sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email : "some@gmial.com",
    fullname:{
        userfullname : {
            firstname:"sara",
            lastname : "fatma"
        }
    }
}
// console.log(regularUser.fullname .userfullname.firstname);
// console.log(regularUser.email);


// Merge Object 
const obj1 ={1 : "a", 2:"b"}
const obj2 ={3 : "c", 4:"d"}
const obj4 ={5 : "e", 6:"f"}
// const obj3= Object.assign({}, obj1, obj2, obj4);

// spread the object 
const obj3 = {...obj1, ...obj2}

// const obj3 = {obj1 , obj2} wrong method for merging it will return as both object..
// console.log(obj3);


// data base se value kaise aati hai 
// array of objects ke jaise aayenge 

const users = [
    {
        id:1, 
        email:"sarafama@gmail.com"
    },
    {
        id:2, 
        email:"fatamasara"
    },
    {
        id:1, 
        email:"sarafama@gmail.com"
    },
    {
        id:1, 
        email:"sarafama@gmail.com"
    },
]

users[1].email.id
console.log(users);
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('IsLoggedIn'));


 






