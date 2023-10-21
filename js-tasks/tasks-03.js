// Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// Geometry Basics: Circle Circumference in 2D

function circleCircumference(circle) {
  return circle.radius * 2 * Math.PI;
}

// Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj){
  const result = [];
  for(let key in obj) {
    if(key.length === 5) {
      result.push(key)
    }
    if(obj[key].length === 5) {
      result.push(obj[key])
    }
  }
  return result
}

// Understanding closures - the basics

// Fun with ES6 Classes #2 - Animals and Inheritance


class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 0;
    this.species = "shark";
    this.status = status;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "cat";
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status);
    this.legs = 4;
    this.species = "dog";
    this.status = status;
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}
