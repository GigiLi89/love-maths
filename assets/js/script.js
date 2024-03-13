
//Event Listener added, it's going to listen for the DOM content to be loaded..
//..then it will execute the function in that code block
document.addEventListener("DOMContentLoaded", function() {
//Adding the Event Listeners below by targetting all the button-tags:
    let buttons = document.getElementsByTagName("button");
//Takes all buttons array and return each element and store in variable button on each iteration
    for (let button of buttons) {
//Event Listener waits for the button to be clicked and the code inside will be runned
        button.addEventListener("click", function() {
//If statement to check the data type to see value. 
//And  if it's submit button we're adding an Alert saying "You clicked submit"
        if (this.getAttribute("data-type") === "submit") {
            alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
//Inside the event listner but outside the for loop
    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
//Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
//Call for
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
//Error msg if it doesn't work
    } else {
        alert(`Unknown game type: $(gameType)`);
//Throw statement stops the game and supplies error msg as well as print to debugging
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

    //After writing the above about addition, go down to displayAdditionQuestion

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    //Gets the random numbers
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    //Sets the addition
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}