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