/******************Clase 3 - Damián Barrionuebo******************/
//Ejercicio n1 de "for"
// Aqui declaro los array que voy a utilizar para los ejercicios
const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Virnes", "Savado"];
const numeros = ["32", "41", "10", "22", "76", "89"];
const persona =["Damián","28","Horda"];
//atributos de un array mediante for 
//ejemplo 1 .keys

for (let index of dias.keys()){
    console.log(dias[index]);
}
for (let i of numeros.keys()){
    console.log(numeros[i]);
}

for (let i of persona.keys()){
    if(i===0){
        console.log(`name: ${persona[i]}`);                                                 
    }else if(i===1){
        console.log(`age: ${persona[i]}`);
    }else{
        console.log(`side: ${persona[i]}`);
    }
}
//ejemplo 2 .length
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

//------------------------------------------------------

// Ejercicio n2 de "switch"
let day=3;
switch (day) {
    case 0:
        console.log(dias[0]);
        break;
    case 1:
        console.log(dias[1]);
        break
    case 2:
        console.log(dias[2]);
        break;
    case 3:
        console.log(dias[3]);
        break;    
    case 4:
        console.log(dias[4]);
        break; 
    case 5:
        console.log(dias[5]);
        break; 
    case 6:
        console.log(dias[6]);
        break; 
    default:
        console.log("El día no existe");
        break;   
}

//------------------------------------------------------

// Ejercicio n3 de "do-while"

let contador= 4;
do{
    console.log(`Do until i say ${contador}`);
    contador++;
} while(contador<15);