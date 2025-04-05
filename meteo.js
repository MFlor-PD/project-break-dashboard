const URLFORECAST = 'https://api.weatherapi.com/v1/forecast.json?key=3f525e740e854af2b7194617250504&q=Valencia,ES&days=1&lang=es'
const CURRENTWEATHERCONTAINER = document.getElementById('current-weather-container')
const HOURLYFORECASTCONTAINER = document.getElementById('hourly-forecast-container')

async function getCurrentWeather(URLFORECAST) {
    try {
        const res = await fetch(URLFORECAST);
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
    
        const { location, current, forecast} = data;
        const { name, country } = location;
        const { temp_c, humidity, wind_kph, condition } = current;
        const { icon, text } = condition;
        const RAIN = forecast.forecastday[0].day.daily_chance_of_rain;
        const FORECASTPERHOUR = forecast.forecastday[0].hour;
        
        const weatherHTML = templateCurrentWeather(name, country, temp_c, humidity, RAIN, wind_kph, icon, text);
        CURRENTWEATHERCONTAINER.innerHTML = weatherHTML;  
        getHourlyForecast(FORECASTPERHOUR);
  }
    catch (err) {
        console.error('Error al obtener el clima actual:', err);
    } 
}

getCurrentWeather(URLFORECAST);

const templateCurrentWeather = (name, country, temp_c, humidity, RAIN, wind_kph, icon, text,) => {
    return `
    <div class='current-weather'> 
        <h2>${name}, ${country}</h2>
     <div class='current-data'>
      <div class='current-degrees'>
        <img src='https:${icon}' alt='${text}' />
        <p class='current-temp'>${temp_c}°C</p>
        <p class='current-text'>${text}</p>
      </div>
      <ul class='weather-info'>
        <li class='current-rain'>Precipitaciones: ${RAIN}%</li>
        <li class='humidity'>Humedad: ${humidity}%</li>
        <li class='wind'>Viento: ${wind_kph} km/h</li>
      </ul>
      </div>
    </div>
    `
  }

  function getHourlyForecast(FORECASTPERHOUR) {
    const HOURLYFORECAST = FORECASTPERHOUR.map((hour) => {
        const { time, temp_c, condition: { icon, text } } = hour;
        return templateHourlyForecast(time, temp_c, icon, text);
      });
      HOURLYFORECASTCONTAINER.innerHTML = HOURLYFORECAST.join('');
  }
const templateHourlyForecast = (time, temp_c, icon, text) => {
    return `
    <div class='hourly-forecast'>
        <p class='time'>${time}</p>
        <img src='https:${icon}' alt='${text}' />
        <p class='hourly-temp'>${temp_c}°C</p>
    </div>
 `
  }
  



