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
