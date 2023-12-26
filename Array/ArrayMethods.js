// Methods of Array

 let num = [ 1,2 ,3,4 ,56,]

 // To String 
 let b = num.toString() // B is now a string 
 console.log(b)


 let c = num.join("_"); // add some stirng between Array
 console.log(c);

 num.pop() // Delete last element from array
 console.log(num)

 let r = num.shift()// remove first element and return it 
 console.log(r,num)

 let t = num.unshift(48) // Adds element to the beginning return new array length 
 console.log(t,num)