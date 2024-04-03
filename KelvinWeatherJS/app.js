//current temp in Kelvin
const kelvin = 0;
//temp in celsius
const celsius = kelvin - 273;
//convert Celsius to Fahrenheit and change result to whole number
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
//shows temperature in Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`${kelvin} Kelvin is about ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} Newton`);