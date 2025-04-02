container = document.getElementById('container'); 

function setClock() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    ({ hours, minutes, seconds, day, month } = fixTimeAndDate(hours, minutes, seconds, day, month));

    const time = `${hours} : ${minutes} : ${seconds} `;
    const date = `${day} / ${month} / ${year}`;
    container.innerHTML = `
    <div class="time">${time}</div>
    <div><p class="phrases">Aqui iran las frases</P></div>
    <div class="date">${date}</div>`;
}

setInterval(setClock, 1000);
setClock();

function fixTimeAndDate(hours, minutes, seconds, day, month) {
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    return { hours, minutes, seconds, day, month };
}

