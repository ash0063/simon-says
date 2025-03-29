let btn1=document.querySelector(".red");
let btn2=document.querySelector(".cyan");
let btn3=document.querySelector(".orange");
let btn4=document.querySelector(".blue");
let h4=document.querySelector("h2");
let h3=document.querySelector("h3");
let div=document.querySelector("#container");
let body=document.querySelector("body");
let gameSeq=[];
let userSeq=[];

let btns=["red","cyan","orange","blue"];
let started=false;//still game is not started..
let level=0;
let highestscore=0;
div.addEventListener("click",function(){
    if(started==false){
        console.log("game started");
        started=true;//this makes sure that the game starts only once
        levelUp();//this follows to the next step
    }
});

    function gameFlash(btn){

        btn.classList.add("flash");
        setTimeout(()=>{
            btn.classList.remove("flash");
        },100);
    }

    function userFlash(btn){

        btn.classList.add("userFlash");
        setTimeout(()=>{
            btn.classList.remove("userFlash");
        },100);
    }
    function levelUp(){
        userSeq=[];
        level++;
        h4.innerHTML=`level ${level}`;
       let randIdx=Math.floor(Math.random()*4);
       let randColor=btns[randIdx];
       let randBtn=document.querySelector(`.${randColor}`);
       gameSeq.push(randColor);
       console.log("game  Sequence=",gameSeq);
    //    console.log(randIdx);
    //    console.log(randColor);
    //    console.log(randBtn);
        gameFlash(randBtn);//this follows the next step
    }
    function checkSeq(idx){
        // console.log("current level:",level);
        if(gameSeq[idx]==userSeq[idx]){
            if(userSeq.length==gameSeq.length){
               setTimeout(levelUp,1000);            
            }                        
        }
        else{
            if(level>highestscore){
                highestscore=level;
            }
            h3.innerHTML=`highest score:${highestscore}`;
            h4.innerHTML=`GAME OVER! Your score was <b>${level}<b> Press any key to start`;
            body.classList.add("gameOver");
        setTimeout(()=>{
            body.classList.remove("gameOver");
        },500);        
        setTimeout(resetTo,1000);
        }
    }
    function btnPress(){
         console.log(this);
        let btn=this;
        userFlash(btn);
        btnColor=btn.getAttribute("id");
        userSeq.push(btnColor);
       console.log("user Sequence=",userSeq);
       checkSeq(userSeq.length-1);
    }
    let allBtns=document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }

function resetTo(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}
