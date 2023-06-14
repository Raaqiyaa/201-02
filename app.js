alert("Welcome to my site!")

alert("quiz time!")

function yourName(){
let user = prompt("Can you please tell me your name?");
return document.write.apply(user)
}

alert("Thank you!")

userName()

function question1(){

let capitalCity = prompt("Is canberra the capital of Australia???? Please answer yes/no or y/n only").toLowerCase();

while (capitalCity != "yes" && capitalCity != "no" && capitalCity != "y" && capitalCity!= "n") {
alert("Please answer yes/no or y/n only");
capitalCity = prompt("Is canberra the capital of Australia? Please answer yes/no or y/n only").toLowerCase();
}

if (capitalCity === "yes" || capitalCity === "y") {
     console.log("Correct, Canberra is the capital of Australia");
  alert("Correct, Canberra is the capital of Australia ");
} else if (capitalCity === "no" || capitalCity === "n") {
     console.log("That is not correct");
  alert("That is not correct,");
}

}

question1()

alert("Onto the next question")

function question2(){

let penguins = prompt("Are penguins capable of flying?")
while (penguins != "yes" && penguins != "no" && penguins != "y" && penguins!= "n") {
  alert("Please answer yes/no or y/n only");
  penguins = prompt("Are penguins capable of flying?")
}

if (penguins === "yes" || penguins === "y") {
     console.log("Correct, Canberra is the capital of Australia");
  alert("Correct, Canberra is the capital of Australia ");
} else if (penguins === "no" || penguins === "n") {
     console.log("That is not correct");
  alert("That is not correct");
}

}

question2()

alert("Onto the next question")

function question3(){

let mountEverest = prompt("Is Mount Everest hard to climb? Please answer yes/no or y/n only").toLowerCase();

while (mountEverest != "yes" && mountEverest != "no" && mountEverest != "y" && mountEverest != "n") {
  alert("Please answer yes/no or y/n only");
  mountEverest = prompt("Is Mount Everest hard to climb? Please answer yes/no or y/n only").toLowerCase();
}

if (mountEverest === "yes" || mountEverest === "y") {
  console.log("Correct, Yes Mount Everest hard to climb")
  alert("Correct,Yes Mount Everest hard to climb ");
} else if (mountEverest === "no" || mountEverest === "n") {
  console.log("That is not correct");
  alert("That is not correct");
}

}


alert("Onto the next question")

function question4(){

let summer = prompt("Is it Summer yet? Please answer yes/no or y/n only").toLowerCase();

while (summer != "yes" && summer != "no" && summer != "y" && summer != "n") {
  alert("Please answer yes/no or y/n only");
  summer = prompt("Is it summer yet? Please answer yes/no or y/n only").toLowerCase();
}

if (summer === "yes" || summer === "y") {
  // console.log("Correct, Yes it is summer")
  alert("Correct,Yes it is summer ");
} else if (summer === "no" || summer === "n") {
  // console.log("That is not correct");
  alert("That is not correct");
}

}

alert("Onto the next question")

function question5(){

let mountEverest = prompt("Is Mount Everest hard to climb? Please answer yes/no or y/n only").toLowerCase();

while (mountEverest != "yes" && mountEverest != "no" && mountEverest != "y" && mountEverest != "n") {
  alert("Please answer yes/no or y/n only");
  mountEverest = prompt("Is Mount Everest hard to climb? Please answer yes/no or y/n only").toLowerCase();
}

if (mountEverest === "yes" || mountEverest === "y") {
  console.log("Correct, Yes Mount Everest hard to climb")
  alert("Correct,Yes Mount Everest hard to climb ");
} else if (mountEverest === "no" || mountEverest === "n") {
   console.log("That is not correct");
  alert("That is not correct");
}
}


alert("Onto the next question")

function question6(){
   let theBeatles = prompt("Was The Beatles is a famous rock band from Manchester? Please answer yes/no or y/n only").toLowerCase();
   while (theBeatles != "yes" && theBeatles != "no" && theBeatles != "y" && theBeatles != "n") {
          alert("Please answer yes/no or y/n only");
          theBeatles = prompt("Was The Beatles is a famous rock band from Manchester? Please answer yes/no or y/n only").toLowerCase();
   }
if (theBeatles === "no" || theBeatles === "n") {
 console.log("Correct, yes, The Beatles is a famous rock band from Liverpool?")
  alert("Correct,Yes Was The Beatles is a famous rock band from Liverpool? ");
} else if (theBeatles === "yes" || mountEverest === "y") {
  console.log("That is not correct");
  alert("That is not correct");
}
}



















