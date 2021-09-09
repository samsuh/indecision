//babel src/playground/es6-arrow-fx.js --out-file=public/scripts/app.js --presets=env,react --watch
const add = function(a,b){
  return a+b
}

console.log(add(55,1))

//this keyword 

const user = {
  name: 'Sam',
  cities: ['NYC', 'Boston', 'LA'],
  // printCitiesLived: function () {
  printCitiesLived() {

    return this.cities.map((city) => this.name + ' has lived in ' + city)

    // console.log(this.name)
    // console.log(this.cities)

  //   this.cities.forEach((city) => {
  //     console.log(this.name + ' has lived in ' + city)
  //   })
  }
}
console.log(user.printCitiesLived())

//Challenge 
//object with data on it, and method that access data, and use map 
const multiplier = {
  numbers: [1,2,3,5,8],
  multiplyBy: 3,
  multiply() {
    console.log(this.numbers)
    return this.numbers.map((num) => num * this.multiplyBy)
  }
}
console.log(multiplier.multiply())