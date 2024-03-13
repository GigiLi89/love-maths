
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
        if (this.getAttribute("data-type") === "submit") {
            checkAnswer();
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
//We need to check the users anser and the correct answer
/** Checks the answer against the first element in the returned
 * calculateCorrectAnswer array
*/
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    //This returns an array
    let calculatedAnswer = calculateCorrectAnswer();
    //Calculate answer
    let isCorrect = userAnswer === calculatedAnswer[0];
    //If answer is correct
    if (isCorrect) {
        alert("Hey! You got it right! :)")
    //If answer is wrong
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }
    runGame(calculatedAnswer[1]);
}
/**
 * Gets the operands and the operator directly from the DOM
 * and returns the correct answer
 */
function calculateCorrectAnswer() {
    /**
     * The first part is just getting the values back from the dom. 
     * We use the parse int function to treat the value as an integer, a whole number since JS by default returns it as a string. 
     * We calculate the correct answer based on game type = operator.
     */
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;
//If the operator is equal to a plus sign, it must be the addition game
    if (operator === "+") {
        return [operand1 + operand2, "addition"]; 
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
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