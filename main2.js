// var userChoice = Math.random();
// if (userChoice < 0.34) {
//     userChoice = "Rock";
// } else if(userChoice <= 0.67) {
//     userChoice = "Paper";
// } else {
//     userChoice = "Scissors";
// };

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "Rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";
}

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
console.log(play(userChoice, computerChoice));

function play(choice1, choice2) {
    
    if(choice1 === choice2) {
        return "The result is a tie!";
    }

    if(choice1 === "Rock") {
        if(choice2 === "Scissors") {
            return "User wins!";
        } else {
            return "Computer wins!";
        }
    }
    
    if(choice1 === "Paper") {
        if(choice2 === "Rock") {
            return "User wins!";
        } else {
            return "Computer wins!";
        }
    }
    if(choice1 === "Scissors") {
        if(choice2 === "Rock") {
            return "Computer wins!";
        } else {
            return "User wins!";
        }
    }
};





