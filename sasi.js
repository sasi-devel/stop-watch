const hr = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")
const msec = document.querySelector(".msec")
const stop = document.querySelector(".red")
const start = document.querySelector(".blue")
const reset = document.querySelector(".green")

let hour=0;
let secs=0;
let mins=0;
let msecs=0;

start.addEventListener("click",()=>{
    start.classList.add('stop-active');
    stop.classList.remove('stop-active')
   set= setInterval(()=>{
        msecs++;
        if(msecs==100){
            secs++;
            msecs=0;
        }
        if(secs==60){
            mins++;
            secs=0;
        }
        if(mins==60){
            hour++;
            mins=0;
        }
        time();
    
    },10)
})

stop.addEventListener("click",()=>{
    clearInterval(set)
    start.classList.remove('stop-active');
    stop.classList.add('stop-active')
})
reset.addEventListener("click",()=>{
     hour=secs=mins=msecs=0;
     time();
})

function time(){
    msec.innerHTML=msecs <10?"0"+msecs:msecs; 
    min.innerHTML=mins <10?"0"+mins:mins;
    sec.innerHTML=secs <10?"0"+secs:secs;
    hr.innerHTML=hour <10?"0"+hour:hour;
}