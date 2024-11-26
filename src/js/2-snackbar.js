import iziToast from 'izitoast'; 
import 'izitoast/dist/css/iziToast.min.css'; 

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Получаем значение задержки и состояния из формы (не уверенна проверить)
  const delay = parseInt(form.elements.delay.value);
    const state = form.elements.state.value;
    
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // если ок
  promise
    .then((delay) => {
      iziToast.success({
        title: 'Fulfilled',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    // если неок
    .catch((delay) => {
      iziToast.error({
        title: 'Rejected',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
