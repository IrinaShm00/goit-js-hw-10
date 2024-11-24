import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";  // бібліотека повідомлень
import "izitoast/dist/css/iziToast.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      iziToast.error({
          title: '',
          backgroundColor: 'red',
          messageColor: 'white',
        message: 'Please choose a date in the future',
        position: 'topRight',
        close: false, 
        timeout: false, 
      });
      document.querySelector('[data-start]').disabled = true;
    } else {
      // destroy удаляет уведомление 
      iziToast.destroy();
      document.querySelector('[data-start]').disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

// Функция для добавления ведущего нуля ????
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % day % hour) / minute);
  const seconds = Math.floor((ms % day % hour % minute) / second);

  return { days, hours, minutes, seconds };
}
const startButton = document.querySelector('[data-start]');
startButton.addEventListener('click', startTimer);

let timerId = null;

function startTimer() {
  const selectedDate = new Date(document.querySelector("#datetime-picker").value);
  startButton.disabled = true;
  document.querySelector("#datetime-picker").disabled = true;  // виключиа вибір дати ???не впевнена
  const interval = setInterval(() => {
    const currentDate = new Date();
    const remainingTime = selectedDate - currentDate;

    
    if (remainingTime <= 0) {
      clearInterval(interval);
      document.querySelector('[data-days]').textContent = "00";
      document.querySelector('[data-hours]').textContent = "00";
      document.querySelector('[data-minutes]').textContent = "00";
      document.querySelector('[data-seconds]').textContent = "00";
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(remainingTime);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
  }, 1000);
}

