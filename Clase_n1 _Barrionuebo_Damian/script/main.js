/******************Clase 1 - Damian Barrionuebo******************/

//exercise 1
//Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo.

let name1 = prompt ("hola, puedes decirme tu nombre");
console.log("Buenas tardes"+name1);

//------------------------------------------------------

//exercise 2
//Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.

let number=6;
let number2 = prompt("Ingrese un numero");
console.log(parseFloat(number2)+number);

//------------------------------------------------------

//exercise 3
//Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.

let text1 = prompt("Usuario Coder por favor");
console.log(text1);
let text2 = prompt("¿Que necesita?");
console.log(text2);
alert("El usuario "+text1+" solicita "+text2);

//console.info(`El usuario ${text1} solicita ${text2}`);
