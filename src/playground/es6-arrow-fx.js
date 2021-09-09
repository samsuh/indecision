// //babel src/playground/es6-arrow-fx.js --out-file=public/scripts/app.js --presets=env,react --watch

// const square = function (x) {
//   return x*x
// }

// //verbose arrow fx
// const squareArrow = (x) => {
//   return x*x
// }

// //implicitly returns 
// const squareArrow2 = (x) => x*x 


// console.log(square(8))
// console.log(squareArrow(9))
// console.log(squareArrow2(3))


//Challenge 
const fullName = "Sam Suh"
const getFirstName = (fullName) => fullName.split(' ')[0]
console.log(getFirstName(fullName))
console.log(getFirstName("Mike Smith"))