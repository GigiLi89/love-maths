
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

    //Use enter key to submit
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
            }
        })
    

//Inside the event listner but outside the for loop
    runGame("addition");

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    //Each time we run it it's going to be set to an empty string
    //When you've put an answer and submit it will give another question auto
    document.getElementById("answer-box").value = "";
    //When we get a new question it will be ready with the curser to type in another answer
    document.getElementById("answer-box").focus();

//Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

//Call for
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
        //Adding subtract
        } else if (gameType === "subtract") {
            displaySubtractQuestion(num1, num2);   
        //Adding multiply
        } else if (gameType === "multiply") {
            displayMultiplyQuestion(num1, num2);  
            //Adding division
        } else if (gameType === "division") {
            displayDivisionQuestion(num1, num2);  

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
        incrementScore();
    //If answer is wrong
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
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
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}
/**
 * Gets the current score from the DOM and inrements it by 1
 * After the increments are written, go back to checkAnswer to call the functions
 */
function incrementScore() {
let oldScore = parseInt(document.getElementById("score").innerText);
//after that we can write it back to the dom.
document.getElementById("score").innerText = ++oldScore; 
//important to put the ++ before the variable
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore; 
}

function displayAdditionQuestion(operand1, operand2) {
    //Gets the random numbers
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    //Sets the addition
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    //operand1 > operand2 ? = Is operand1 bigger than operand2?
    //if operand1 is bigger, return that. if operand2 is bigger, return that instead
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
    operand1 = operand1 * operand2;
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById('operator').textContent = "/";
}