"use strict";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getInt(input) {
  return parseInt(input);
}

function getRandom() {
  let randomNumber = [];
  while (randomNumber.length < 4) {
    let random = ~~(Math.random() * 10);
    if (!randomNumber.includes(random)) {
      randomNumber.push(random);
    }
  }
  return randomNumber;
  console.log(randomNumber);
}

function getResult(input, right) {
  let inputArr = input.split(" ");

  let set = new Set();
  inputArr.forEach(element => {
    set.add(element);
  });
  if (inputArr.length != 4 || set.size != inputArr.length) {
    console.log("Wrong Input，Input again");
  }

  let answerArr = [];
  inputArr.forEach(element => {
    answerArr.push(parseInt(element));
  });

  let xNum = 0;
  let yNum = 0;

  for (let i = 0; i < right.length; i++) {
    if (answerArr[i] === right[i]) {
      xNum++;
    } else {
      if (right.includes(answerArr[i])) {
        yNum++;
      }
    }
  }

  return xNum + "A" + yNum + "B";
}

var count = 0;
var random = getRandom();

function getInput() {
  rl.question("Please input your number:", answer => {
    count++;
    let output = getResult(answer, random);
    console.log(output);

    if (output.substring(0, 1) == 4) {
      rl.close();
      return;
    }

    if (count < 6) {
      getInput();
    } else {
      console.log("you lose!");
      rl.close();
    }
  });
}

function main() {
  getInput();
}
