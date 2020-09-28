const TARGET_DATE = "1 Jan 2021";
const targetDate = new Date(TARGET_DATE);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown(targetDate) {
  const now = new Date();
  const diffSeconds = Math.floor((targetDate - now) / 1000);

  const days = Math.floor(diffSeconds / 3600 / 24);
  const hours = Math.floor(diffSeconds / 3600) % 24;
  const minutes = Math.floor(diffSeconds / 60) % 60;
  const seconds = Math.floor(diffSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = formatPeriod(minutes);
  secondsEl.innerHTML = formatPeriod(seconds);
}

function formatPeriod(value) {
  return value < 10 ? `0${value}` : value;
}

countdown(targetDate);
setInterval(countdown, 1000, targetDate);
