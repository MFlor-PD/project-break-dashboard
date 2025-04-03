container = document.getElementById('container');
const setPhrases = [
    {start: 0, end: 7.99, phrase: 'A dormir cabrones!'},
    {start: 8, end: 10.99, phrase: 'Y ahora seguro que no te puedes levantar de la cama, venga hombre!'},
    {start: 11, end: 14.99, phrase: 'Que... encima estas pensando en comer??, de trabajar ni hablamos eh?'},
    {start: 15, end: 18.99, phrase: 'Ni se te ocurra pensar en la siesta!'},
    {start: 19, end: 21.99, phrase: 'y si...salen unas cañitas??'},
    {start: 22, end: 23.99, phrase: 'y ya fue... que trabaje Raquel, mirate una buena peli!'},
];

function getPhrases(hours, minutes) {
    let currentHourtoDecimal = hours + minutes / 100;
    let phrasesDelSet = setPhrases.find(({ start, end}) => currentHourtoDecimal >= start && currentHourtoDecimal <= end);
    return phrasesDelSet ? phrasesDelSet.phrase : 'hora no encontrada';
}

function setClock() {
    let currentDate = new Date()
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let phrase = getPhrases(hours, minutes);

    ({ hours, minutes, seconds, day, month } = fixTimeAndDate(hours, minutes, seconds, day, month));

    const time = `${hours} : ${minutes} : ${seconds} `;
    const date = `${day} / ${month} / ${year}`;
                                                                
    container.innerHTML = `
    <div class="time">${time}</div>
    <div><p class="phrases">${phrase}</P></div>
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




    

