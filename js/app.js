let choices = document.querySelectorAll(".choice"),
    ruleBtn = document.querySelector(".rules-btn"),
    gameZone = document.querySelector(".game-zone"),
    ruleZone = document.querySelector(".rule-zone"),
    closeIcon = document.querySelector(".close-icon"),
    header = document.querySelector(".header"),
    resultZone = document.querySelector(".result-zone"),
    playBtn = document.querySelector(".play-again");


let ourChoice = document.querySelectorAll(".my-choice"),
    houseChoice = document.querySelectorAll(".house-choice"),
    result = document.querySelector(".result"),
    score = document.querySelector(".score-value");
    

let myChoice = "null",
    herChoice = "null";

choices.forEach(c=>{
    c.addEventListener("click",()=>{
        ourChoice.forEach(e=>{
            e.classList.add("of");
        })
        houseChoice.forEach(el=>{
            el.classList.add("of");
        })
        if(c.classList.contains("paper-choice")){
            myChoice = "paper"
            // console.log("you picked ",myChoice);

        }else if (c.classList.contains("rock-choice")){
            myChoice = "rock";
            // console.log("you picked ",myChoice);
            
        }else{
            myChoice = "scissor";
            // console.log("you picked ",myChoice);
        
        }
        gameZone.classList.add("of");
        resultZone.classList.add("on");

        let currentRandom = Math.floor(Math.random()*3);

        houseChoice[currentRandom].classList.remove("of");

        if(houseChoice[currentRandom].classList.contains("paper-choice")){
            herChoice = "paper";
        }else if(houseChoice[currentRandom].classList.contains("rock-choice")){
            herChoice = "rock";
        }else{
            herChoice = "scissor";
        }

        // console.log(herChoice);

        if(myChoice == herChoice){
            result.textContent = "NO WINNER";
        }else if (myChoice =="rock" && herChoice =="paper"){
            result.textContent = "YOU LOSE";
        }else if(myChoice == "scissor" && herChoice=="rock"){
            result.textContent="YOU LOSE";

        }else{
            result.textContent ="YOU WON";
            
            score.textContent = parseInt(score.textContent)+1;
            
        
        }
        
        if(myChoice === "paper"){
            ourChoice.forEach((ch=>{
                if(ch.classList.contains("paper-choice")){
                    ch.classList.remove("of");
                }
            }))
            
        }else if(myChoice === "rock"){
            ourChoice.forEach((ch=>{
                if(ch.classList.contains("rock-choice")){
                    ch.classList.remove("of");
                }
            }))
        }else{
            ourChoice.forEach((ch=>{
                if(ch.classList.contains("scissor-choice")){
                    ch.classList.remove("of");
                }
            }))
            
        }
           
    })
   
})


ruleBtn.onclick = ()=>{
    ruleZone.classList.toggle("on");
    gameZone.classList.toggle("on");
    header.classList.toggle("on");
    resultZone.classList.toggle("of");

    
}

closeIcon.onclick =()=>{
    ruleZone.classList.remove("on");
    gameZone.classList.remove("on");
    header.classList.remove("on");
    resultZone.classList.remove("of");

}

playBtn.onclick = ()=>{
    resultZone.classList.remove("on");
    gameZone.classList.remove("of");

}










