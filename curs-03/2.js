function Person (name, age) {
  this.name = name
  this.age = age
  this.printMe = function () {
    console.log(`${this.name} is ${this.age} old`)
  }
}

const p0 = new Person('jim', 22)
p0.printMe()

const p1 = new Person('jane', 25)
p1.printMe()

console.log(p0.__proto__)
