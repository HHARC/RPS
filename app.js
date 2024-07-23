let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore")
const compscorepara=document.querySelector("#compscore")

// Generate computer choice
const getcomputerchoi = () => {
    const option = ["rock", "paper", "scissors"];
    const choiceidx = Math.floor(Math.random() * 3);
    return option[choiceidx];
}

const drawgame = () => {
    console.log("The game was draw");
    msg.innerText = "The game was draw";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText=userscore;
        
        msg.innerText = 'You Win! Computer choice is  ${compchoice} ';
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText=compscore;
        
        msg.innerText = "You lost! Computer choice is  ${compchoice}";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice", userchoice);
    const compchoice = getcomputerchoi();
    console.log("computer choice", compchoice);

    if (userchoice === compchoice) {
        // Draw game
        drawgame();
    } else {
        let userwin;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
