/* 
	GOAL: Create a rock paper scissors game
	
	Required Features:
		- Auto correct invalid enterings:
			i.e. enter rok instead of Rock
		- Play the computer or another human
		- A hidden cheat (like nuclear)
*/
// Some functions

// yesNoResponse function
// takes one parameter, response (string)
// returns true / false (boolean) depending on the response
var yesNoResponse = function(response) {
	// hint: use an if statement
	if (response === "Yes" || response === "yes") {
		return true;
	} else {
		return false;
	}
};

// randomChoice function
// returns a random rock, paper, scissors choice
var randomChoice = function() {
	return "rock";
};

// Start the game
alert("Welcome to Rock Paper Scissors!");

var playComputer = prompt("Do you want to play the computer?");

// play the computer
if (yesNoResponse(playComputer)) {
	// loop forever (until they quit)
	var choice = "none";

	while (choice !== null && choice !== "") {
		choice = prompt("Rock, paper, or scissors?");

		// figure out the computers choice
		var computersChoice = randomChoice();

		// give back a response depending on computer choice

	}
} else {
	alert("playing a human is not supported :)");
}