// Filter 


//const newNums = myNums.filter( (num)=> num>90  )                 //syntax 1
//const newNums1= myNums.filter(  ( num2) => {                     // syntax 2 
 //   return num2>90
//})

//console.log ( newNums)
// we can use Filter to add conditions to array and return the specified values only which satidfies the conditions 

// we can do the same thing using ForEach Loop  as well 


const myNum = [ 23,54,23,54,67,78,345,23,656,345];
const myNums= []
myNum.forEach ( (num) => {
    if ( num > 90 ){
        myNums.push(num)
    }
})
console.log( myNums)
// Map 
// styntax is same as filter but Map is used to do operations and filter purpose is to filter/condition adding 
Mir Niyazul Haque 