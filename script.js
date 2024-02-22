let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");
const res = document.querySelector("#restart");
const msg = document.querySelector("#msg");

res.addEventListener("click",()=>{
    window.location.reload();
})

const whoWon=(userWin)=>{
    if(userWin){
    console.log(`U won :)`);
    msg.innerText = "U Won :)";
    msg.style.backgroundColor = "green";
    userScore +=1;
    user.innerText = `${userScore}`;
    }
    else{
        console.log(`U loose :(`);
        msg.innerText = "U loose :(";
        msg.style.backgroundColor = "red";
        compScore +=1;
        comp.innerText =`${compScore}`;
    }
}

const draw = ()=>{
    console.log("game was a draw");
    msg.innerText = "That's a Draw play again!!";
    msg.style.backgroundColor = "orange";
}

const compareResult = (userChoice, compChoice) =>{
    let userWin = true;
    if(userChoice === compChoice){
        draw();
    }
    else{
        if(userChoice === "stone"){
        userWin = compChoice ==="paper"? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true; 
        }
        else{
            userWin = compChoice === "stone" ? false : true;
        }
        whoWon(userWin);
    }  

}

const genCompChoice = () =>{
    const options = ["stone","paper","scissors"];
    const ranNum = Math.floor(Math.random()*3);
    return options[ranNum];
}

const playGame=(userChoice)=>{
genCompChoice();
const compChoice = genCompChoice();
compareResult(userChoice,compChoice);

}

choices.forEach((sel)=>{
    sel.addEventListener("click",()=>{
        const userChoice = sel.getAttribute("id");
        playGame(userChoice);
    })
})
