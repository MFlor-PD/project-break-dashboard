timeContainer = document.getElementById('time-container'); 

const setClock = () => { 
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const time = `${hours} : ${minutes} : ${seconds} `;
    const date = `${day} / ${month} / ${year}`;
    timeContainer.innerHTML = `${time} ${date}`;
}

setInterval(setClock, 1000);
setClock();
