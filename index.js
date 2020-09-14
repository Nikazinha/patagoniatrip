
const days = document.getElementById("day"); 
const hours = document.getElementById("hour");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");


const PatagoniaTrip = "1 Mar 2021";


function countdown(){

    const PatagoniaTripDate = new Date(PatagoniaTrip);
    const CurrentDate = new Date (); 
    
    const totalSeconds = (PatagoniaTripDate - CurrentDate)/1000; 

    const daysLeft = Math.floor(totalSeconds/24/60/60);
    const hoursLeft = Math.floor(totalSeconds/60/60) % 24;
    const minLeft = Math.floor(totalSeconds/60) % 60; 
    const secLeft = Math.floor(totalSeconds) % 60;

    days.innerHTML = daysLeft;
    hours.innerHTML = formatTime(hoursLeft);
    minutes.innerHTML = formatTime(minLeft);
    seconds.innerHTML = formatTime(secLeft);

}
countdown();

function formatTime (time){
   return time < 10 ? ("0" + time) : time; 
}

setInterval (countdown,1000);




