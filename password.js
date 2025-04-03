    const displayPassword = document.getElementById('display-password');
    const passLenght = document.getElementById('pass-lenght');
    btn = document.getElementById('btn');

    //declarar las variables
    const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCases = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+';
    const all = upperCases + lowerCases + numbers + symbols;

    //ESTA FUNCION TODA, GENERA LA CONTRASENA, ahora con 12 caracteres
const setPassword = (length = 50) => {                                             //en esteLENGHT esta la papa
    
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
      <p>No olvides guardarla en un lugar seguro para que no se te olvide</p>
    </div>`
    return password;                                                                  //Devuelve la cajita pasword con los 12 caracteres mezclados
    
};
setPassword();

//NECESITO CONFIGURAR PARA QUE LA CONTRASENA SEA ENTRE 12 Y 50.

// * if numeroElegidoInput >= 12 && <=50 =>IMPRIMA UNA COSNTRASENA
// * else numeroeleigoInput < 12 || > 50 => 'Numero invalido'



/*function setPasswordLenght(password) {
if (passLenght  >= 12 && passLenght  <= 50) {

} else (passLenght  < 12 || passLenght  > 50) {
 displayPassword.innerHTML = 'Introduce un número válido entre 12 y 50 caracteres'}
}
const generatedPassword = setPassword();
setPasswordLenght(generatedPassword);*/

/*btn.addEventListener('click', () => {
     (passLenght  >= 12 && passLenght  <= 50) {
        return displayPassword.innerHTML = `
            <div>
            <p>Tu nueva constraseña es: </p>
            <div class='password-display'>${password}</div>
            <p>No olvides guardarla en un lugar seguro para que no se te olvide</p>
            </div>`
        } else  {
         displayPassword.innerHTML = 'Introduce un número válido entre 12 y 50 caracteres'}
})*/