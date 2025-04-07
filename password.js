    const displayPassword = document.getElementById('display-password');               //Captura de elementos del DOM 
    const passLenght = document.getElementById('pass-lenght');
    btn = document.getElementById('btn');

  
    const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';                                     //Declarar variables con datos que necesitare
    const lowerCases = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+';
    const all = upperCases + lowerCases + numbers + symbols;                               //Integrar TODOS los datos de las distintas variables en una sola. 

//ESTA FUNCION TODA, GENERA LA CONTRASENA, ahora con 12 caracteres
const setPassword = (length = 12) => {                                                   //length el valor minimo, para no buguear el bucle
    
    let password = "";                                                                  //declarar la variable password vacia a llenarse con lo de abajo
    
    password += upperCases[Math.floor(Math.random() * upperCases.length)];              //asegura de meter dentro de let = password al menos 1 de cada
    password += lowerCases[Math.floor(Math.random() * lowerCases.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    for (let i = 4; i < length; i++) {                                                 // itera sobre const = all para terminar de completar pasword hasta minimo 12
        password += all[Math.floor(Math.random() * all.length)];
    }
     
    password = password.split('').sort(() => Math.random() - 0.5).join('');           // Toma todo lo que hay en pasword, lo divide, lo mezcla y lo vuelve a unir
    
    
    return password;                                                                  //Devuelve la cajita pasword con los 12 caracteres mezclados
    
};
//ESTA F(X) OBTIENE EL LARGO MINIMO Y MAXIMO DE CONTRASENIA Y DEVUELVE MENSAJES
const getPasswordLength = () => {
let passwordLength = parseInt(passLenght.value);                                      //parse y value para ingresar los valores dentro del input

if (passwordLength < 12 || passwordLength > 50) {
    displayPassword.innerHTML = 'Introduce un número válido entre 12 y 50 caracteres';
    return;
}
const getPassword = setPassword(passwordLength);

displayPassword.innerHTML = `
    <div>
      <p class='new-password'>Tu nueva constraseña es: </p>
      <div class='password-display'>${getPassword}</div>
      <p class'recommendation'>Guardarla en un lugar seguro para que no se te olvide!</p>
    </div>`
}
//eventos de click
btn.addEventListener('click', getPasswordLength);