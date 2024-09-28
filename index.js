// class = a blueprint for creating objects
// define what properties and methods they have

// inheritance = a child class can inherit all the
// methods and properties from another class

class Car {

  static numberOfCars = 0

  constructor(model) {
    this.model = model
    Car.numberOfCars += 1
  }

  static startRace() {
    console.log("3...2...1...GO!")  
  }
}

const car1 = new Car("Mustang")
const car2 = new Car("Corvette")
const car3 = new Car("BMW")
const car4 = new Car("Ferrari")
const car5 = new Car("Lambo")

Car.startRace()

////////////////////////////////////////////////                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

class Student {

  constructor(name, age, gpa) {
    this.name = name
    this.age = age
    this.gpa = gpa
  }
  study() {
    console.log(`${this.name} is studying`)
  }
}

const student1 = new Student("Spongebob", 30, 3.2)
const student2 = new Student("Patrick", 35, 1.5)

console.log(student1.name) 
console.log(student1.age)
console.log(student1.gpa)
student1.study()

console.log(student2.name) 
console.log(student2.age)
console.log(student2.gpa)
student2.study()


class Player {
  score = 0

  pause() {
    console.log("You paused the game")
  }
  exit() {
    console.log("You exited the game")
  }
}

const player1 = new Player()
const player2 = new Player()
const player3 = new Player()
const player4 = new Player()

player1.score += 1

console.log(player1.score)
console.log(player2.score)

player1.pause()
player2.exit()

