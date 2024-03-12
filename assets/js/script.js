
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
//Using Teplate Literal, note that there is back quotes instead
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
//Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}