alert("Welcome to my site!")
alert("quiz time!")

let score = 0;


function yourName() {
let user = prompt("Can you please tell me your name?");
return document.write(user)
}
yourName()


function question1() {
let capitalCity = prompt("Is canberra the capital of Australia???? Please answer yes/no").toLowerCase();

    while (capitalCity != "yes" && capitalCity != "no") {
    alert("Please answer yes/no");
    capitalCity = prompt("Is canberra the capital of Australia? Please answer yes/no").toLowerCase();
    }

if (capitalCity === "yes" || capitalCity === "y") {
    score++ 
    console.log("Correct, Canberra is the capital of Australia");
    alert("Correct, Canberra is the capital of Australia ");

} else if (capitalCity === "no" || capitalCity === "n") {
    console.log("That is not correct");
    alert("That is not correct,");
    }
}

question1()
alert("Onto the next question")


function question2() {
	let penguins = prompt("Are penguins capable of flying? Please answer yes/no")

while (penguins != "yes" && penguins != "no") {
    alert("Please answer yes/no");
    penguins = prompt("Are penguins capable of flying? Please answer yes/no")
    } 

    if (penguins === "yes"){
	score++
    console.log("Correct, Canberra is the capital of Australia");
    alert("Correct, Canberra is the capital of Australia ");
    
    } else if (penguins === "no") {console.log("That is not correct"); {
    alert("That is not correct");
    }
}

}

question2()
alert("Onto the next question")


function question3(){
	let mountEverest = prompt("Is Mount Everest hard to climb? Please answer yes/no").toLowerCase();

while (mountEverest != "yes" && mountEverest != "no" && mountEverest != "y" && mountEverest != "n") {
    alert("Please answer yes/no or y/n only");
    mountEverest = prompt("Is Mount Everest hard to climb? Please answer yes/no").toLowerCase();
    } 
	
	if (mountEverest === "yes"){
	score++
    console.log("Correct, Yes Mount Everest hard to climb")
    alert("Correct,Yes Mount Everest hard to climb ");
    } 
	
	else if (mountEverest === "no") {
    console.log("That is not correct");
    alert("That is not correct");
}

}

question3()
alert("Onto the next question")


function question4(){
    let summer = prompt("Is it Summer yet? Please answer yes/no").toLowerCase();

while (summer != "yes" && summer != "no") {
    alert("Please answer yes/no");
    summer = prompt("Is it summer yet? Please answer yes/no").toLowerCase();
    } 
	
	if (summer === "yes") {
	score++
    onsole.log("Correct, Yes it is summer")
    alert("Correct,Yes it is summer ");
    } 
	
	else if (summer === "no") {
    console.log("That is not correct");
    alert("That is not correct");
    }
}

question4()
alert("Onto the next question")


function question5(){
    let mountEverest = prompt("Is Mount Everest hard to climb? Please answer yes/no or y/n only").toLowerCase();

while (mountEverest != "yes" && mountEverest != "no" && mountEverest) {
    alert("Please answer yes/no");
    mountEverest = prompt("Is Mount Everest hard to climb? Please answer yes/no").toLowerCase();
    } 
	
	if (mountEverest === "yes") {
	score++
    console.log("Correct, Yes Mount Everest hard to climb")
    alert("Correct,Yes Mount Everest hard to climb ");
	}
	
	else if (mountEverest === "no") {
    console.log("That is not correct");
    alert("That is not correct");
    }
}

question5()
alert("Onto the next question")


function question6(){
    let theBeatles = prompt("Was The Beatles a famous rock band from Manchester? Please answer yes/no").toLowerCase();

    while (theBeatles != "yes" && theBeatles != "no") {
    alert("Please answer yes/no");
    theBeatles = prompt("Was The Beatles a famous rock band from Manchester? Please answer yes/no").toLowerCase();
    }
    
	if (theBeatles === "no") {
	score++
    console.log("Correct, yes, The Beatles is a famous rock band from Liverpool?")
    alert("Correct,Yes Was The Beatles is a famous rock band from Liverpool? ");
    }
	
	else if (theBeatles === "yes"){
    console.log("That is not correct");
    alert("That is not correct");
	}

}

