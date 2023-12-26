// Singleton :
//if you make object with constructor 


const mySym = Symbol ("SpecialKey")
const jsuser = {           //object

    name : "Niyaz",
    age: 20,
    location : "Odisha",
    loginDetails: false,
    [mySym]:"SpecialKey"


} // object 
console.log(  jsuser[mySym])
console.log(jsuser.name)


//Object.freeze(jsuser)//freezing the values of objects 
jsuser.name = "Haque" // Changing the values of Object 
console.log(jsuser.age)
console.log( jsuser.name)

jsuser.greetings = function(){
    console.log( " HELLO MY BEST FRIEND FOREVER ")
}
console.log(jsuser.greetings())
