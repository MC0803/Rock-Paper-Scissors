let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#Msg");
const userScorePara = document.querySelector("#userscore");
const computerScorePara = document.querySelector("#compscore");

const generatecompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const DrawGame = () =>{
    console.log("It's a draw!");
    msg.innerText = "It was a draw!";
    msg.style.backgroundColor = "darkslateblue";
}

choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click", ()=> {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})

const ShowWinnner = (userWin,userchoice, compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("UserWins");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "darkcyan";
    }else{
        computerscore++;
        computerScorePara.innerText = computerscore;
        console.log("Comp wins");
        msg.innerText = "Computer Wins!";
        msg.style.backgroundColor = "indianred";
    }
}

const playgame = (userchoice)=>{
    console.log("User choice = ",userchoice);
    const compChoice = generatecompchoice();
    console.log("Computer choice = ", compChoice);

    if (userchoice == compChoice){
        DrawGame();
    }else{
        userWin = true;
        if(userchoice == "rock"){
            userWin = compChoice ==="paper" ? false: true;
        }
        else if (userchoice == "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        ShowWinnner(userWin,userchoice , compChoice);  
    }
}