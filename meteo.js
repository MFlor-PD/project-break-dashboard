/*## Estación meteorológica:

### ¿Como funciona?
Crea una página que tendrá lo siguiente:
- El tiempo en el momento en el que accedemos a la página con varios elementos:
  - Ciudad y Pais. Pondremos la ciudad y País en el que nos encontramos.
  - El estado del clima.
  - Imagen y grados celsius de nuestra ciudad.
  - Precipitaciones, humedad y viento km/h.
- La previsión por horas en el día en el que estamos. Con su hora, imagen y grados celsius. 
- Dale estilo con CSS.

### ¿Qué usaremos?
- API del tiempo de `https://www.weatherapi.com/`
- Necesitarás una API KEY. Podrás conseguirla entrando en la url de weatherapi y pulsando en signup. Rellena los datos que pide y nada más entrar os aparecerá esa API KEY.
- Puedes probar que funciona en esta página: `https://www.weatherapi.com/api-explorer.aspx` metiendo la APIKEY y dándole al botón de `show response`
- Aquí está la documentación completa `https://www.weatherapi.com/docs/`
- Este es el `base URL` al que tendréis que acceder `https://api.weatherapi.com/v1` añadiremos detrás lo que necesitemos. 
 - Este es un ejemplo de endpoint con la APIKEY y la ciudad. Solo habría que cambiar los datos de `${apiKey}` por la nuestra y `${ciudad}` por la elegida por nosotros `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
- `fetch` para hacer peticiones a la API.

### PISTAS Y CONSEJOS
- La URL base es `http` cámbiala desde el inicio por `https` para no tener problemas en el futuro de bloqueos de seguridad.
- Usa `promesas` o `ASYNC/AWAIT` para crear la asincronía en las peticiopnes `fetch`
- Piensa si necesitas solo un endpoint o varios. Revisa que trae cada petición.
- Estructura bien tu código 
---------------------------------------------------------------------------------------------------------------------
el endpoint es LA BASEURL + METODO + PARAMETROS. Ejemplo:
http://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=London&hour=15

DESGLOSANDO URL:
http://api.weatherapi.com/v1/forecast.json: El punto final para obtener los pronósticos en formato JSON.
?key=YOUR_API_KEY: Tu clave de API para autenticación.
&q=London: La ubicación para la que solicita el pronóstico (en este caso, Londres).
&hour=15: Este es el parámetro clave. Indica que quieres restringir la respuesta del pronóstico a los datos correspondientes a la hora 15:00 (3 PM) del día actual (y potencialmente de los días siguientes si el pronóstico es para varios días).

base url:http://api.weatherapi.com/v1
metodo: El tiempo actual	/current.json 
        Pronóstico	        /forecast.json
parametros:
key: tu api key
q: ciudad o coordenadas (latitud y longitud) de la ciudad que quieres consultar.
- Puedes usar `localStorage` para guardar la ciudad y que no se borre al recargar la página.
días: número de días que quieres que te devuelva el pronóstico. Por defecto es 1, pero puedes poner hasta 14 días.
horas: número de horas que quieres que te devuelva el pronóstico. Por defecto es 1, pero puedes poner hasta 48 horas.
- Puedes usar `async/await` para hacer las peticiones a la API y manejar los errores con `try/catch`.
(Opcional) current_fieldsNuevo:	Pase los nombres de campo separados por comas y que deben devolverse en el elemento actual.	
campos_actuales=temperatura_c,viento_mph 
IDIOMA: si fuese necesario

API
API en tiempo real: permite al usuario obtener información meteorológica actualizada en formato JSON y XML. Los datos se devuelven como un objeto actual.
Campo	              Tipo de datos               	Descripción
última actualización	cadena	          Hora local cuando se actualizaron los datos en tiempo real.
temperatura_c	        decimal	                 Temperatura en grados Celsius
viento_kph	             decimal	          Velocidad del viento en kilómetros por hora
precipitación_mm	   decimal	              Cantidad de precipitación en milímetros
humedad	                entero	                  Humedad como porcentaje
condición:icono	        cadena	                      URL del icono del tiempo

API de pronóstico
El método de la API de pronóstico del tiempo devuelve, según su plan de precios, el pronóstico del tiempo y las alertas meteorológicas para los próximos 14 días en formato JSON. Los datos se devuelven como un objeto de pronóstico.
El objeto de pronóstico contiene datos astronómicos, pronóstico meteorológico diario e información meteorológica a intervalos horarios para una ciudad determinada.

forecastday: Elemento padre
forecastday -> day: el elemento 'day' dentro de forecastday contiene temperatura máxima/mínima y temperatura promedio

pronóstico del día ->
pronóstico astronómico del día -> hora:


Pronóstico del día	                                     Elemento padre
pronósticodía -> día	                           El elemento día contiene:
                                                      Temperatura máxima, mínima y media
                                                      Velocidad máxima del viento
                                                      Precipitación total
                                                     Condiciones climáticas diurnas
pronóstico día -> hora	                           El elemento hora contiene:
                                                      información del pronóstico meteorológico hora por hora

          pronóstico del día
Campo	    Tipo de datos	     Descripción
fecha	       cadena	      Fecha de pronóstico
fecha_época	   entero	      Fecha de pronóstico como hora Unix.
día	          elemento	      Ver elemento de día: humedad media	entero	Humedad media como porcentaje
hora	      elemento	      ####3Ver elemento de hora:

######Elemento de hora
Campo	Tipo de datos	Descripción
época_de_tiempo	entero	El tiempo como época
tiempo	cadena	Fecha y hora
temperatura_c	decimal	Temperatura en grados Celsius

URL de la lista de condiciones en inglés (JSON): https://www.weatherapi.com/docs/weather_conditions.json

Ejemplo
La API de WeatherAPI.com es muy fácil de implementar. Vea los siguientes ejemplos para ver cómo puede generar una solicitud para obtener datos, ya sea a través de un navegador web o en su aplicación.


Entonces, para obtener el clima actual en Londres: JSON: http://api.weatherapi.com/v1/current.json?key=3f525e740e854af2b7194617250504&q=London

XML: http://api.weatherapi.com/v1/current.xml?key=<SU_CLAVE_API>&q=Londres
Para obtener el clima de 7 días para el código postal 07112 de EE. UU.: JSON: http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7
*/

const URLCURRENT = 'https://api.weatherapi.com/v1/current.json?key=3f525e740e854af2b7194617250504&q=Valencia,ES'
const URLFORECAST = 'https://api.weatherapi.com/v1/forecast.json?key=3f525e740e854af2b7194617250504&q=Valencia,ES&days=1'

async function getCurrentWeather(URLCURRENT) {
    try {
        const res = await fetch(URLCURRENT);
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error('Error al obtener el clima actual:', err);
    }
}
async function getForecastWeather(URLFORECAST) {
    try {
        const res = await fetch(URLFORECAST);
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error('Error al obtener el pronóstico del clima:', err);
    }
}