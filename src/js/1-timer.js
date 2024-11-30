// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
iziToast.settings({
    timeout: 5000,
    resetOnHover: true,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
    position: 'topCenter',
    progressBar: false,
    closeOnEscape: true,
    close: false,
});

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate <= new Date()) {
            iziToast.warning({
                message: "Please choose a date in the future",
            });
            bthStart.disabled = true;
        } else {
            dateSelect = selectedDate;
            bthStart.disabled = false;
        }
    },
};

flatpickr("#datetime-picker", options);

let dateSelect = null;
const bthStart = document.querySelector("[data-start]");
bthStart.disabled = true;

function startTimer() {
    bthStart.disabled = true;
    const input = document.querySelector("#datetime-picker");
    input.disabled = true;

    const inter = setInterval(() => {
        const timeLeft = dateSelect - new Date();

        if (timeLeft <= 0) {
            clearInterval(inter);
            input.disabled = false;
            iziToast.success({ message: "Timer finished!" });
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(timeLeft);

        document.querySelector("[data-days]").textContent = addLeadingZero(days);
        document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
        document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
        document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
    }, 1000);
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}


bthStart.addEventListener("click", startTimer);
