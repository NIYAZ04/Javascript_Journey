// DOM -> Document Object Model 
// BOM -> Browser Object Model 
// All these things are controlled by Window 


//Walking the DOME
const changeBodyStyle =() =>{
    document.body.firstElementChild.style.background= "red"

}
let a = document.body
console.log(" first child of the boyy is: ", a.firstChild)
console.log( " first element child of body is : ", a.firstElementChild)