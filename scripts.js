let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let hrs = document.querySelector(".hrs");
let mins = document.querySelector(".mins");
let secs = document.querySelector(".secs");

let hour = 0;
let min = 0;
let second = 0;
let interval;

start.addEventListener("click", function() {
  interval = setInterval(function() {
  if (second < 59) {
    second += 1;
    secs.innerHTML = second < 10 ? " 0" + second : second;
  }
  else {
    second = 0;
    secs.innerHTML = second < 10 ? " 0" + second : second;
  }
  if (min < 59) {
    min += 1;
    mins.innerHTML = min < 10 ? "0" + min + ":" : min + ":";
  }
  else {
    hour += 1;
    hrs.innerHTML = hour < 10 ? "0" + hour + ":" : hour + ":";
  }
 }
}, 1000);
  
  start.style.pointerEvents = "none";
});

stop.addEventListener("click", function() {
  clearInterval(interval);
  start.style.pointerEvents = "visible";
});

reset.addEventListener("click", function() {
  location.reload();
});
