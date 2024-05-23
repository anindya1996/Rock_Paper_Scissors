let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const user_score_para=document.querySelector("#user-score")
const comp_score_para=document.querySelector("#comp-score")

//To generate computer choice
const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

drawGame = () => {
    // console.log(`Game was draw.`);
    msg.innerText="Game was draw.";
    msg.style.backgroundColor = "#081b31";
}

showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        // console.log(`You won`);
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        user_score_para.innerText=userScore;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        // console.log(`You lost`);
        comp_score_para.innerText=compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}


const playGame = (userChoice) => {
    // console.log(`user choice is: ${userChoice}`);
    const compChoice = generateCompChoice();
    // console.log(`Computer choice is: ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

//To take user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

