//I'm gonna cash the DOM before I start:

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");



// a function to tell the computer to play random choices for me:
function getComputerChoice() {
       const choices = ['r', 'p', 's'];
       const randomNumber = Math.floor(Math.random() * 3);
       return choices[randomNumber];
}

// This function is to convert the math results (Numbers) into a word on screen:
function convertToWord (letter) {
       if (letter === "r") return "Rock";
       if (letter === "p") return "Paper";
       return "Scissors";

}
// function to increment the User score:

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;   //.InnerHTML is used here to overwrite the previous content by the new one.
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} , you Win! yaaay!`;
    // To put the green glow when winning:
    document.getElementById(userChoice).classList.add('green-glow');
    // and to remove it after few seconds:
  setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
}


//and another function to increment the Computer score
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} Loses to ${convertToWord(computerChoice)} , Oh Noo..you Lost..`;
  //and again the red glow for losing:
  document.getElementById(userChoice).classList.add('red-glow');



// To remove the green glow after few seconds insert this code:
// Also I removed the word Function and made it ES6 as you see here:
setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 1000);
}


function draw(userChoice, computerChoice) {

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)} , It's a draw. Keep trying..`;
// Same thing again for the glow:
  document.getElementById(userChoice).classList.add('gray-glow');
//and I didn't remove the word funtion this time for you to know the difference for ES6:
setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}




// Aaaaaaaaaaaaaaaaand switch statement
function game(userChoice) {
        const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
         win(userChoice, computerChoice);
            break;
            case "rp":
            case "ps":
            case "sr":
         lose(userChoice, computerChoice);
                  break;
                  case "rr":
                  case "pp":
                  case "ss":
                       draw(userChoice, computerChoice);
                       break;
   }
}
// and another function


function main() {
rock_div.addEventListener('click', function() {
       game("r");
  })

paper_div.addEventListener ('click', function() {
       game("p");
})

scissor_div.addEventListener("click", function() {
        game("s");

})
}

      main ();
