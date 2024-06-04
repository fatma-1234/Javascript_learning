
// java scripts ko seekhne ke liye sirf 2 chizein seekh lijiye 1)-> objects   2)-> events 

// we can declare  objects in  two ways 
// 1) Literal 
// 2) Constructor 

// Singleton 
// singleton ka matlab hota hai agr koi bhi coonstructor se jb bnate hain toh singleton ek object banta hai ..
// yani ki singleton apne tarah ka ek hi object hai 
// agar literals ke tarah object declare krte hain toh singleton nhi banta hai ..
// agar constructor se object declare krenge toh obviously singleton bnaega..



// object Literals (object declare karne ka tarika)
// const JsUser={}    => object created 
// Object.creat  => object created  constructor ke through 

// myArray = ["h", "1"]
// myArray[1]
// console.log(myArray);

// object literals

const mySym = Symbol("key1")

const JsUser = {
   name : "sara",
   "full name": "sarafatma",
   [mySym]: "mykey1",
// [mySym]= syntax of a symbol
    age : 18, 
    location: "Delhi",
    email : "sarafatma6784.com",
    IsloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// methos 1 to declare object => when we use . operator we dont need to declare as string 
console.log(JsUser.email)
// Method 2 to declare object => when we dont use . operator wo need to declare as string 
// console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
//console.log(typeof JsUser.mySym)


// object ki value ko access kaise karte hain ?
// . notation se 

// object ki value ko change kaise karte hain ?
// = ke saath value ko overwrite kar skate hain ...

JsUser.email = "fatamasara"
// how to lock value 
Object.freeze(JsUser)
JsUser.email = "samirafatma@"
console.log(JsUser.email)











