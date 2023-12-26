const tinderaUser = new Object() // singleTone Object 
const tinderaUser2 = {} // Non SingleTone Object 


const Testing = {
    name :"Niyaz",
    UserId : "HelloUser4546",
    Password: 123456,
    isLogedIn: false,

     FullNameDetails :{
        FirstName : "Mir",              //  Nested objects
        MiddleName: "Niayzul",
        LastName : "Haque"
    }
}

console.log( Testing.FullNameDetails.MiddleName) // Way of Accessing Data of the Object 


// Merging Two Objects 

const obj1 = { 1:23,2:43,4:32}
const obj2 = {14:253,8:213,5:42}


const obj3 = Object.assign( { } , obj1, obj2)   // Merging Two Objects  with Assign method


console.log( obj3)

