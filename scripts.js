var timer = 0;
var interval;

function start() {
  stop();
  interval = setInterval(function () {
    timer += 1 / 60;
    ms = Math.floor((timer - Math.floor(timer)) * 100);
    sec = Math.floor(timer) - Math.floor(timer / 60) * 60;
    min = Math.floor(timer / 60);
    hr = Math.floor(timer);
    document.getElementById('millisecs').innerHTML = ms < 10 ? "0" + ms.toString() : ms;
    document.getElementById('secs').innerHTML = sec < 10 ? "0" + sec.toString() : sec;
    document.getElementById('mins').innerHTML = min < 10 ? "0" + min.toString() : min;
  }, 1000 / 60);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  stop();
  timer = 0;
  document.getElementById('hrs').innerHTML = "00";
  document.getElementById('mins').innerHTML = "00";
  document.getElementById('secs').innerHTML = "00";
  document.getElementById('millisecs').innerHTML = "00";
}
