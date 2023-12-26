// Hitesh Sir

function  NiyazPrint(){
    console.log("My Name is mir Niyazul Haqu")
}

NiyazPrint()


function CalculateCardPrice ( ...num1){  // ... is the rest operator which takes numbers as array
    return num1
}
console.log(CalculateCardPrice(200,100,200))

// handling Objects with functions



const AuthentificationDetails ={
    usename:"Niyaz",
    password: 34573447
}
function handleObjects ( anyobjects){


    console.log (` username is ${anyobjects.usename } and password is ${anyobjects.password}`)
}

handleObjects( AuthentificationDetails)


const myNewArray = [ 3874,23,54,65]

function returnSecondValue( getArrayDetails){
    console.log (` The Second value of Array if Exist : ${getArrayDetails[1]}`)
}
returnSecondValue(myNewArray)
