var timer = 2;
let  numm = 0;
let incr = 0;
function MakeBubble (){
    let number = ""
for(i=1; i <= 108 ; i++)
{
    var num = Math.floor(Math.random()*10)
   number +=  `<div class="circle">${num}</div>`;
}

document.querySelector("#bottomPanel").innerHTML = number;
}

function runTimer()
{
    var timerInt = setInterval(function (){
        if(timer > 0){
        timer--;
        document.querySelector("#timerVal").textContent = timer;
        }
        else
        {
        clearInterval(timerInt);
        document.querySelector("#bottomPanel").innerHTML = `<h1>Game Over! Final Score : ${incr}</h1`;
        } 
    },1000);
        }

function hitNo()
{
     numm = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = numm;
}
function increase()
{
    incr+= 10;
    document.querySelector("#scoreVal").textContent =  incr;
}
    document.querySelector("#bottomPanel").addEventListener("click", function(data){
     var  clickedButton = Number(data.target.textContent);
        if( clickedButton  === numm)
        {
            increase();
            MakeBubble();
            hitNo();
        }
    })



runTimer();
MakeBubble();
hitNo();
