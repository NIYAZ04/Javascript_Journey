let num = [ 23, 4, 23, 43 ];
delete num[0];
console.log(num)  // Delete an element from array , But the size still remains same

let numMore = [ 23, 4, 23, 43 ];
let newArray = num.concat(numMore) //  Merge Two Arrays Together
console.log(newArray)

num.sort()  // This sort function sorts number wise 
console.log(num)


