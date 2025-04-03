const setPassword = () => {
    const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCases = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+';
    const all = upperCases + lowerCases + numbers + symbols;
};
setPassword();
console.log(setPassword(), all);