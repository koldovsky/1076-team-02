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

//Oleksandr Parkhomchuk
function makeNegative(num) {
  return num > 0 ? num*(-1) : num
}

//Maria Zhenchur 
function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}

//Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

// Irina Mishchenko
function move (position, roll) {
  let result = position + roll * 2;
  return result;
}

//Oleksandr Parkhomchuk
function move (position, roll) {
  return position + roll * 2
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

//Oleksandr Parkhomchuk
function greet (name, owner) {
  return name == owner ? 'Hello boss' : 'Hello guest';
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

//Oleksandr Parkhomchuk
function lovefunc(flower1, flower2){
  return ((flower1 % 2 === 0 && flower2 % 2 !== 0) ||
        (flower1 % 2 !== 0 && flower2 % 2 === 0)) ? true : false
}
