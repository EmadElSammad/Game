let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");



function getComputerChoice() {
       const choices = ['r', 'p', 's'];
       const randomNumber = Math.floor(Math.random() * 3);
       return choices[randomNumber];
}
// ya boooooooooooooooooo ya nas ya hoooooo

function convertToWord (letter) {
       if (letter === "r") return "Rock";
       if (letter === "p") return "Paper";
       return "Scissors";

}
/// Now we're going to do the switch statement.
//It will be below the function first:

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} , you Win! yaaay!`;
    document.getElementById(userChoice).classList.add('green-glow');
// To remove the green glow after few seconds insert this code:
  setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} Loses to ${convertToWord(computerChoice)} , Oh Noo..you Lost..`;
  document.getElementById(userChoice).classList.add('red-glow');
// To remove the green glow after few seconds insert this code:
// Also I removed theh word Function and made it ES6 as you see here:
setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);

}
function draw(userChoice, computerChoice) {

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)} , It's a draw. Keep trying..`;
  document.getElementById(userChoice).classList.add('gray-glow');
// To remove the green glow after few seconds insert this code:
//I didn't remove the word funtion
setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 300);

}


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
