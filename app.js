var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard")
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const resetBtn_div = document.querySelector(".resetBtn");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNb = Math.floor(Math.random() * 3);
    return choices[randomNb];
}

function getVerb(choice) {
    switch (choice) {
        case "rock":
            return "smashes";
        case "paper":
            return "covers";
        case "scissors":
            return "cuts";
    }
}

function capitalize(str) {
    if (typeof(str) !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

function userWins(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    let verb = getVerb(userChoice);
    let newUserChoice = capitalize(userChoice);
    let newResult = `${newUserChoice} ${verb} ${compChoice}. You win! 🔥`;
    result_p.innerHTML = newResult;
    scoreBoard_div.classList.add('green-border');
    setTimeout(() => scoreBoard_div.classList.remove('green-border'), 300);
}

function userLoses(userChoice, compChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    let verb = getVerb(compChoice);
    let newCompChoice = capitalize(compChoice);
    const newResult = `${newCompChoice} ${verb} ${userChoice}. You lose! 😢`;
    result_p.innerHTML = newResult;
    scoreBoard_div.classList.add('red-border');
    setTimeout(() => scoreBoard_div.classList.remove('red-border'), 300);
}

function draw(userChoice) {
    result_p.innerHTML = `It's a ${userChoice} draw! 💩`;
    scoreBoard_div.classList.add('grey-border');
    setTimeout(() => scoreBoard_div.classList.remove('grey-border'), 300);
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            userWins(userChoice, compChoice);
            break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            userLoses(userChoice, compChoice);
            break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            draw(userChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));

    paper_div.addEventListener('click', () => game("paper"));

    scissors_div.addEventListener('click', () => game("scissors"));

    resetBtn_div.addEventListener('click', () => resetGame());
}

main();