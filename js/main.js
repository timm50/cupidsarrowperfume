function renderTime(){
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dayNumber = date.getDate();
const monthArray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
const day = date.getDay();
const dayArray = new Array("Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat");
let ampm = "";

let hours = date.getHours();
 if(hours === 24){
   hours = 0;
 }else if(hours >= 13){
   hours = hours - 12
   ampm = "pm";
 }else{
   ampm = "am";
 }
 if(hours < 10 || hours >= 13){
   hours = "0" + hours;
}

let minutes = date.getMinutes();
if(minutes < 10){
  minutes = "0" + minutes;
}

let seconds = date.getSeconds();
if(seconds < 10){
  seconds = "0" + seconds;
}

const time = dayArray[day] + " " + monthArray[month] + " " + dayNumber + "," + " " + year + " " + "| " + hours + ":" + minutes + ":" + seconds + " " + ampm; 
document.getElementById("clock").innerHTML = time;

setTimeout("renderTime()", 1000);
}

renderTime();