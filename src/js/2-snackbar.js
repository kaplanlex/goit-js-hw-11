import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", submitDefault);

function submitDefault(event) {
    event.preventDefault();


    const a = Number(form.delay.value);
    const b = form.state.value;


    addPromis(a, b)
        .then((delay) => {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`,
                backgroundColor: "#28a745",
            });
        })
        .catch((delay) => {
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
                backgroundColor: "#e72427",
            });
        });
}


function addPromis(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === "fulfilled") {
                resolve(a);
            } else {
                reject(a);
            }
        }, a);
    });
}
