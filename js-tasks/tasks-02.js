//Convert a string to an array https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

//DNA to RNA Conversion https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
//Find Maximum and Minimum Values of a List https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//Smallest value of an array https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

//Поглиблені задачки (робити за бажанням):
//A wolf in sheep's clothing https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  }
  return `Oi! Sheep number ${queue
    .reverse()
    .indexOf("wolf")}! You are about to be eaten by a wolf!`;
}

// 

function warnTheSheep(queue) {
  let index = queue.reverse().indexOf("wolf");
  return index === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
}

//Beginner - Lost Without a Map https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
  return x.map((value) => value * 2);
}

//Find the first non-consecutive number https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}
