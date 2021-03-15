/**************trabajoFinalBarrionueboDamian**************/

//Observaciones
/*
_Codigo html inicial
_Boton de activacion incorporado al codigo html
_
*/
// Objetos
class entidad {
    constructor(name, hP, armor){
        this.name = name;
        this.hP = hP;
        this.armor = armor;
    }
    accionDeCombate=(atacante, objetivo, daño, heroe)=>{
        if (heroe === true) {
            objetivo.hP -= daño;
                console.log(`${atacante.name} hace ${daño} de daño a ${objetivo.name}`);
        }else{
            objetivo.hP -= daño;
                console.log(`${atacante.name} hace ${daño} de daño a ${objetivo.name}`);
            }
    }
}
let heraldo = new entidad("Heraldo",14, 7);
let arballestera = new entidad("Arballestera",11);
let esqueletoEscudero = new entidad("Esqueleto escudero",14);
let esqueletoGuerrero = new entidad("Esqueleto guerrero",11);
//------------------------------------------------------//
// Variables
let heroe = false;
//------------------------------------------------------//
//DADOS
const dado = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
//------------------------------------------------------//
//Accion de ataque
const combate =()=>{
    do{
        heraldo.accionDeCombate(heraldo,objetive(dado(2, 3)),dado(0, 6),true);
        arballestera.accionDeCombate(arballestera,objetive(dado(2, 3)),dado(0, 8),true);
        esqueletoEscudero.accionDeCombate(esqueletoEscudero,objetive(dado(0, 1)),dado(0, 6),false);   
        esqueletoGuerrero.accionDeCombate(esqueletoGuerrero,objetive(dado(0, 1)),dado(0, 8),false);

}while((heraldo.hP>0 || arballestera.hP>0)&&(esqueletoEscudero.hP>0 || esqueletoGuerrero.hP>0));
    console.log("Salud Final:");
    console.log(`${heraldo.name} tiene ${heraldo.hP} de vida`);
    console.log(`${arballestera.name} tiene ${arballestera.hP} de vida`);
    console.log(`${esqueletoEscudero.name} tiene ${esqueletoEscudero.hP} de vida`);
    console.log(`${esqueletoGuerrero.name} tiene ${esqueletoGuerrero.hP} de vida`);

    if ((heraldo.hP>0 || arballestera.hP>0) && (esqueletoEscudero.hP<0 && esqueletoGuerrero.hP<0)){
        console.log("¡Ganaron los heroes!");
        }else{
        console.log("¡Los heroes han caido!");
            } 
}
//------------------------------------------------------//
//Objetivo
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

