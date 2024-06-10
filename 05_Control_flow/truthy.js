const userEmail = "h@sara.ai"

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Dont have user email");
}


// Falsy Value 

// false , 0, -0, BigInt 0n, "", null, undefined, NAN(not a number)

// Truthy Value 
// "0" => string ke andar agr 0 hai toh trythy value hai..agr
// 'o' => truthy value 
// "false"
// " " => empty string ke andar bhi agr space diya hai toh ye truthy valur hai 
// [] => truthy value hai 
// function(){} => empty function ko bhi truthy value kahte hain ...

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? 10 ?? 15
// val1 = undefined ?? 15
console.log(val1);


// Ternaiary Operator 

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")








