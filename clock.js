const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-title");

function getTime(){
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const second = date.getSeconds();
    clockTitle.innerText= `${hours <= 9 ? `0${hours}` : hours}:${minute <=9 ? `0${minute}` : minute}:${second<=9 ? `0${second}`  : second}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();