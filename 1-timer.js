import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i,f}from"./assets/vendor-BbbuE1sJ.js";i.settings({timeout:5e3,resetOnHover:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",position:"topCenter",progressBar:!1,closeOnEscape:!0,close:!1});const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(i.warning({message:"Please choose a date in the future"}),n.disabled=!0):(u=t,n.disabled=!1)}};f("#datetime-picker",h);let u=null;const n=document.querySelector("[data-start]");n.disabled=!0;function p(){n.disabled=!0;const e=document.querySelector("#datetime-picker");e.disabled=!0;const t=setInterval(()=>{const s=u-new Date;if(s<=0){clearInterval(t),e.disabled=!1,i.success({message:"Timer finished!"});return}const{days:c,hours:d,minutes:r,seconds:a}=y(s);document.querySelector("[data-days]").textContent=o(c),document.querySelector("[data-hours]").textContent=o(d),document.querySelector("[data-minutes]").textContent=o(r),document.querySelector("[data-seconds]").textContent=o(a)},1e3)}function o(e){return String(e).padStart(2,"0")}function y(e){const r=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:a,minutes:l,seconds:m}}n.addEventListener("click",p);
//# sourceMappingURL=1-timer.js.map
