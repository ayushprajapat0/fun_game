let icons=document.querySelectorAll(".choose img");
let userdiv=document.querySelector(".usericon");
let compdiv=document.querySelector(".compicon");
let res=document.querySelector(".result");
let user=document.querySelector(".you h3");
let comp=document.querySelector(".comp h3");
let userScore=0;
let compScore=0;
let pressedicon;

for(let icon of icons){
    icon.addEventListener("click",() => {
       let pressedicon=icon.getAttribute("id");
       userdiv.innerHTML=`<img src="./img/${pressedicon}.png" id="${pressedicon}">`;
       let generatedIcon=randomIcon();
       compdiv.innerHTML=`<img src="./img/${generatedIcon}.png" id="${generatedIcon}">`;
       let str=compareRes(pressedicon,generatedIcon);
       user.innerHTML=userScore;
       comp.innerHTML=compScore;
    });
}
function randomIcon(){
    let randNo=Math.floor(Math.random()*3);
    console.log(randNo);
   if(randNo===0){
    return "rock";
   }
   else if(randNo===1){
    return "paper";
   }
   else{
    return "scissor";
   }
}

function compareRes(press,generated){
    if(press == "rock"){
        if(generated == "rock"){
            console.log("It's Draw!");
            res.innerHTML=`It's Draw!`;
            res.style.color="skyblue";
        }
        else if(generated == "paper"){
            console.log(`You Lose ☹️`);
            res.innerHTML=`You Lose ☹️`;
            res.style.color="red";
            compScore++;
        }
        else{
            console.log("You Win 😊");
            res.innerHTML=`You Win 😊`;
            res.style.color="green";
            userScore++;
        }
    }
    if(press == "paper"){
        if(generated == "rock"){
            console.log("You Win 😊");
            res.innerHTML=`You Win 😊`;
            res.style.color="green";
            userScore++;
        }
        else if(generated == "paper"){
            console.log(`It's Draw!`);
            res.innerHTML=`It's Draw!`;
            res.style.color="skyblue";
        }
        else{
            console.log("You Lose ☹️");
            res.innerHTML=`You Lose ☹️`;
            res.style.color="red";
            compScore++;
        }
    }
    if(press == "scissor"){
        if(generated == "rock"){
            console.log("You Lose ☹️");
            res.innerHTML=`You Lose ☹️`;
            res.style.color="red";
            compScore++;
        }
        else if(generated == "paper"){
            console.log(`You Win 😊`);
            res.innerHTML=`You Win 😊`;
            res.style.color="green";
            userScore++;
        }
        else{
            console.log("It's Draw!");
            res.innerHTML=`It's Draw!`;
            res.style.color="skyblue";
        }
    }
}


