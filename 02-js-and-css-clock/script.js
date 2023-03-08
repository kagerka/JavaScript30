let secHand = document.querySelector('.second-hand');
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

setInterval(() => {
  let date = new Date();

  let seconds = date.getSeconds();
  let secondsDeg = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secondsDeg}deg)`;

  let minutes = date.getMinutes();
  let minutesDeg = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDeg}deg)`;

  let hours = date.getHours();
  let hoursDeg = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);
