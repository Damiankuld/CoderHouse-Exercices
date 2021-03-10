/******************Clase 2 - Damián Barrionuebo******************/
//Crear un algoritmo con un condicional


//Práctica con varios condicionales

let años;
let abuela = confirm("¿Tu abuela aun vive?");
if (!abuela) {
    console.log ("Mis condolencias");
} else {
    años = prompt("¿Cuantos años tiene?");
    if (años <= 40){
        console.log ("Que joven");
    } else if (años >= 41 && años <= 89){
        console.log("Que haga galletas");
    } else {
        console.log("Esta para el cajón");
    }
}

// Ejercicio adicional para evaluar strings

let lindo = prompt ('Ingrese la palabra "lindo"');
if (lindo.toUpperCase() === "LINDO"){
    console.log("Gracias, se que lo soy.");
} else{
    console.log("Vos que sabes...")
}



















