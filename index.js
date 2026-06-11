    let rock = document.getElementById("rock")
    let paper = document.getElementById("paper")
    let scissor = document.getElementById("scissor")

    let title = document.getElementById("title")
    let result = document.getElementById("result")

    let choices = ["rock","paper","scissor"]

    function playgame(userchoice){

        let compchoice = choices[Math.floor(Math.random()*3)];
        let message = "" ;

        if(userchoice === compchoice){

            message= `SAME CHOICES LET'S PLAY AGAIN  ${userchoice}` ;
        }
        else if(
            (userchoice==='rock' && compchoice==='scissor')||
            (userchoice==='paper' && compchoice==='rock')||
            (userchoice==='scissor' && compchoice==='paper')
        ){

            message= `you win ${userchoice} 🎊` ;
        }

        else{
            message="YOU LOSE";
        }

        result.innerText= message ;


    }


    rock.addEventListener("click",() => playgame("rock")) ;
    paper.addEventListener("click",() => playgame("paper")) ;
    scissor.addEventListener("click",() => playgame("scissor")) ;
