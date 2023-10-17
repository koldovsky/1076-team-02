//Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

// Irina Mishchenko
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// Irina Mishchenko
function makeNegative(num) {
  if(num > 0) {
    return num * -1;
  } else if (num < 0) {
    return num;
  } else {
    return 0;
  }
}

//Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

// Irina Mishchenko
function move (position, roll) {
  let result = position + roll * 2;
  return result;
}

//Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

// Irina Mishchenko
function greet (name, owner) {
  let greeting = "";
  if(name === owner) {
    greeting = "Hello boss";
  } else {
    greeting = "Hello guest";
  }
  return greeting;
}

//Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript

// Irina Mishchenko
function litres(time) {
  return Math.floor(time * 0.5);
}

//Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

// Irina Mishchenko
function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if(flower2 % 2 === 0 && flower1 % 2 !== 0) {
    return true;
  } else {
    return false
  }
}
