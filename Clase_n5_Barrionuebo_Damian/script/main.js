/**************trabajoFinalBarrionueboDamian**************/

//Observación
/*
Integrar objeto al algoritmo fue sencillo, simplemente cambiar las entradas para iterar las variables. Sin embargo, en la parte de seleccionar objetivo tuve que agregar un IF ya que con objetos no podía definir la ruta del mismo con el cálculo de un número para determinar la ubicación a diferencia de los arrays, por lo que el algoritmo lleva mas lineas.
Creo haber arreglado el loop de combate.
Añadi mensajes dependiendo del resultado del combate.
*/
//Declaración de objetos
function entidad(name, hP){
    this.name = name;
    this.hP = hP;
}
let heraldo = new entidad("Heraldo",14);
let arballestera = new entidad("Arballestera",11);
let esqueletoEscudero = new entidad("Esqueleto escudero",14);
let esqueletoGuerrero = new entidad("Esqueleto guerrero",11);

// Declaración de variables
// Combate
let heroe = false;
//------------------------------------------------------//
//DADOS
const dado = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
//------------------------------------------------------//
//Accion de ataque
const accionDeCombate=(atacante, victima, daño, heroe)=>{
    if (heroe === true) {
        victima.hP -= daño;
        console.log(`${atacante.name} hace ${daño} de daño a ${victima.name}`);
    }else{
        victima.hP -= daño;
        console.log(`${atacante.name} hace ${daño} de daño a ${victima.name}`);
    }
}
// Ciclo de combate
const combate =()=>{
    while(stillAliveHero && stillAliveEnemy()){
        accionDeCombate(heraldo,objetive(dado(2, 3)),dado(0, 6),true);
        accionDeCombate(arballestera,objetive(dado(2, 3)),dado(0, 8),true);
        accionDeCombate(esqueletoEscudero,objetive(dado(0, 1)),dado(0, 6),false);   
        accionDeCombate(esqueletoGuerrero,objetive(dado(0, 1)),dado(0, 8),false);
    }
    console.log("Salud Final:");
    console.log(`${heraldo.name} tiene ${heraldo.hP} de vida`);
    console.log(`${arballestera.name} tiene ${arballestera.hP} de vida`);
    console.log(`${esqueletoEscudero.name} tiene ${esqueletoEscudero.hP} de vida`);
    console.log(`${esqueletoGuerrero.name} tiene ${esqueletoGuerrero.hP} de vida`);

    if ((heraldo.hP>0 || arballestera.hP>0) && (esqueletoEscudero.hP<=0 && esqueletoGuerrero.hP<=0)){
    console.log("¡Ganaron los heroes!");
    }else{
    console.log("¡Los heroes han caido!");
        } 
}
//Establecer que los heroes aun siguen con vida (los dividi para pruebas mas adelante)
const stillAliveHero=()=>{
    return (heraldo.hP>0 || arballestera.hP>0);
}
//establecer que los anemigos aun siguen con vida
const stillAliveEnemy=()=>{
    return (esqueletoEscudero.hP>0 || esqueletoGuerrero.hP>0);
}

//------------------------------------------------------//
// Desde esta funcion se establecen los objetivos
const objetive = (roll)=>{
    if (0 === roll){
        return heraldo;
    }else if (1 === roll){
        return arballestera;
    }else if (2 === roll){
        return esqueletoEscudero;
    }else {
        return esqueletoGuerrero;
    }
}
//------------------------------------------------------//
//Inicialización
combate();
