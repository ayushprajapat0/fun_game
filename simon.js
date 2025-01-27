let gameSeq=[];
let userSeq=[];
let buttons=["yellow","red","green","purple"];
let started=false;
let level=0;
let h3=document.querySelector('h3');
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=buttons[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelup,500);
        }
    }else{
       h3.innerHTML=`Game over! Your Score was <b>${level}</b>. <br> Press any key To start Again.`
       document.querySelector(".main").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector(".main").style.backgroundColor="white";
       },150);
       reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let btns=document.querySelectorAll(".box")
for(btn of btns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;
}