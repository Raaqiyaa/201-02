"use strict";

alert("Welcome to my site!")

function yourName(){
let user = prompt("Can you please tell me your name?");
return document.write.apply(user)
}

alert("Thank you!")


let capitalCity = prompt("Is canberra the capital of Australia???? Please answer yes/no or y/n only").toLowerCase();

while (capitalCity != "yes" && capitalCity != "no" && capitalCity != "y" && capitalCity!= "n") {
  alert("Please answer yes/no or y/n only");
  capitalCity = prompt("Is canberra the capital of Australia??")? Please answer yes/no or y/n only").toLowerCase();
}

if (capitalCity === "yes" || capitalCity === "y") {
     console.log("Correct, Canberra is the capital of Australia");
  alert("Correct, Canberra is the capital of Australia ");
} else if (capitalCity === "no" || capitalCity === "n") {
     console.log("That is not correct");
  alert("That is not correct,");
}




alert("Onto the next question")

let penguins = prompt("Are penguins capable of flying?")
while (penguins != "yes" && penguins != "no" && penguins != "y" && penguins!= "n") {
  alert("Please answer yes/no or y/n only");
  penguins = prompt("Are penguins capable of flying?")

if (penguins === "yes" || penguins === "y") {
     console.log("Correct, Canberra is the capital of Australia");
  alert("Correct, Canberra is the capital of Australia ");
} else if (penguins === "no" || penguins === "n") {
     console.log("That is not correct");
  alert("That is not correct");
}

alert("Onto the next question")



alert("which of the following statement is false?")

function trueorfalsequiz() {

let capital = The capital of France is London;
let earth = The Earth revolves around the Sun;
let Water = Water boils at 100 degrees Celsius at sea level;

if (earth && water) {
  console.log("capital and earth were both true");
} else if (capital || earth) {
  console.log("capital or earth was false");
} else if (capital) {
  console.log("water and earth was true, but capital was false");
} else {
  console.log("were any of the variables true?");
}

}

trueorfalsequiz()

alert("Good attempt!")




alert("Onto the next question")

let mountEverest = prompt("Is Mount Everest hard to climb? Please answer yes/no or y/n only").toLowerCase();

while (mountEverest != "yes" && mountEverest != "no" && mountEverest != "y" && mountEverest != "n") {
  alert("Please answer yes/no or y/n only");
  mountEverest = prompt("Is Mount Everest hard to climb? Please answer yes/no or y/n only").toLowerCase();
}

if (mountEverest === "yes" || mountEverest === "y") {
  // console.log("Correct, Yes Mount Everest hard to climb")
  alert("Correct,Yes Mount Everest hard to climb ");
} else if (mountEverest === "no" || mountEverest === "n") {
  // console.log("That is not correct");
  alert("That is not correct");
}























