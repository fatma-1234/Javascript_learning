// Scope 
// jab teno variable kaam kar rhe hain toh zroort kya this inn teeno ko use krne ki 
// why we are using let, const meanwhile we can use only var ..
// isko lekar isliye aaye ki ye jo chz hai ye actually me hmare blocks code ko jo ki hona chahiye tha uske tarah kaam nhi karta hai ...

// Global scopes 
// var c= 300
// let a = 300;

// // Block Scope 
// if (true){
//     let a = 10
//     const b = 20
    // console.log("INNER:" ,a);


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sara"

    function two(){
        const web = "youtube"
        console.log(username);
    }
    // console.log(web);
    // two()
}
// one()

if (true){
    const username = "sara"
    if (username === "sara"){
        const website = "youtube"
        // console.log(username + website );
    }
    // console.log(website);

}    
// console.log(username);


// **************************Interesting **************************

function addone(num){
    return num + 1
}
// console.log(addone(5))


addTwo(6)
const addTwo = function(num){
    return num + 2
}











