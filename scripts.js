var timer = 0;
var interval;
var hr = document.getElementById('hrs')
var min = document.getElementById('mins');
var sec = document.getElementById('secs');
var ms = document.getElementById('millisecs');

function start() {
  stop();
  interval = setInterval(function () {
    timer += 1 / 60;
    ms_count = Math.floor((timer - Math.floor(timer)) * 100);
    sec_count = Math.floor(timer) - Math.floor(timer / 60) * 60;
    min_count = Math.floor(timer / 60);
    hr_count = Math.floor(timer);
    ms.innerHTML = ms_count < 10 ? "0" + ms_count.toString() : ms_count;
    sec.innerHTML = sec_count < 10 ? "0" + sec_count.toString() : sec_count;
    min.innerHTML = min_count < 10 ? "0" + min_count.toString() : min_count;
  }, 1000 / 60);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  stop();
  timer = 0;
  ms.innerHTML = "00";
  sec.innerHTML = "00";
  min.innerHTML = "00";
  hr.innerHTML = "00";
}
