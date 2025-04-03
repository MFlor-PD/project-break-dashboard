    const displayPassword = document.getElementById('display-password')
    //declarar las variables
    const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCases = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+';
    const all = upperCases + lowerCases + numbers + symbols;

const setPassword = (length = 12) => {
    
    let password = "";                                                                  //declarar la variable password vacia a llenarse con lo de abajo
    
    password += upperCases[Math.floor(Math.random() * upperCases.length)];              //asegura de meter dentro de let = password al menos 1 de cada
    password += lowerCases[Math.floor(Math.random() * lowerCases.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    for (let i = 4; i < length; i++) {                                                 // itera sobre const = all para terminar de completar pasword hasta minimo 12
        password += all[Math.floor(Math.random() * all.length)];
    }
     
    password = password.split('').sort(() => Math.random() - 0.5).join('');           // Toma todo lo que hay en pasword, lo divide, lo mezcla y lo vuelve a unir
    displayPassword.innerHTML = `
    <div>
    <p>Tu nueva constraseña es: </p>
    <div class='password-display'>${password}</div>
    </div>`
    return password;                                                                  //Devuelve la cajita pasword con los 12 caracteres mezclados
    
};
setPassword();

