const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"


    if(h>12){
        h = h-12
        ampm = "PM"
    }

    h = h<10?"0"+h:h;
    m = m<10?"0"+m:m;
    s = s<10?"0"+s:s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondsEL.innerText = s;
    ampmEl.innerText = ampm

    setTimeout(()=>{updateClock()},1000)

}
//self project to add 0 to minutes or hours if single digit

updateClock() 
