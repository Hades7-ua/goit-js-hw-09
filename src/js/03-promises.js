import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  let firstDelay = Number(e.target.elements.delay.value);
  let delayStep = Number(e.target.elements.step.value);
  let amount = Number(e.target.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay)
      .then(({ position, firstDelay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${firstDelay}ms`);
      })
      .catch(({ position, firstDelay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${firstDelay}ms`);
      });
    firstDelay += delayStep;
  }
}
