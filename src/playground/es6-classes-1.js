class Person {
  constructor(name = "Anonymous", age = 0){
    this.name = name,
    this.age = age
  }

  getGreeting(){
    // return 'Hi ' + this.name + "!"
    return `Hi, I am ${this.name}.`
  }

  getAge(){
    return `Age is ${this.age}`
  }

  getDescription(){
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription(){
    let description = super.getDescription()
    if (this.hasMajor()){
      description += ` Their major is ${this.major}. `
    }
    return description
  }
}

class Traveler extends Person {
  constructor (name, age, home){
    super(name, age)
    this.home = home
  }
  hasHome(){
    return !!this.home
  }
  getGreeting(){
    let greeting = super.getGreeting()
    if(this.hasHome()){
      greeting += ` I am fom ${this.home}.`
    }
    return greeting
  }
}

// const me = new Person("Sam", 22)
// console.log(me.getGreeting())
// console.log(me.getDescription())

// const other = new Person()
// console.log(other.getGreeting())
// console.log(other.getDescription())

// const me = new Student('Sam', 25, "Computer Science")
// console.log(me.getDescription())
// console.log(me.hasMajor())

// const other = new Student()
// console.log(other.getDescription())
// console.log(other.hasMajor())

const me = new Traveler ('Sam', 25, "NYC")
console.log(me.getGreeting())