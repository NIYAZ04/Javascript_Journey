 const course = {
courseName: "FINDOSM",
courseInstructor: "Niyaz",
CoursePrice: 938
}
//console.log ( course.CoursePrice)  // One way of Printing the value 
//console.log( course[courseName])  // Another way of printing the value 


// Now we will see How to  " De- Structure and print the values"
// Same thing can be done in Arrays also 

const { courseInstructor} = course
console.log( courseInstructor)
// we can make our own Name to any object while de - structuring 
const { courseName : Name } = course
console.log( Name)