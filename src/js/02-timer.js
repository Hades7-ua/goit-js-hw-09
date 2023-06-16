import flatpickr from 'flatpickr';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
// const values = document.querySelectorAll('value');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - new Date() < 1000) {
      window.alert('Please choose a date in the future');
    }
  },
};

const input = document.getElementById('datetime-picker');
const flatpickr = flatpickr(input, options);

startButton.addEventListener('click', timer);

function timer() {
  let counter = setInterval(() => {
    const currentDate = new Date(input.value);
    console.log(currentDate);
    const differenceTime = currentDate - Date.now();
    console.log(differenceTime);
    if (differenceTime < 1000) {
      clearInterval(counter);
      countdown();
      return;
    }
    const date = convertMs(differenceTime);
    countdown(date);
  }, 1000);
}
function countdown({
  day = '00',
  hour = '00',
  minute = '00',
  second = '00',
} = {}) {
  daysEl.textContent = day;
  hoursEl.textContent = hour;
  minutesEl.textContent = minute;
  secondsEl.textContent = second;
  //   return { days, hours, minutes, seconds };
}
console.log(countdown);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
