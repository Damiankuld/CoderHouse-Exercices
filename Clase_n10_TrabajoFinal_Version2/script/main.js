/**************trabajoFinalBarrionueboDamian**************/

// Objetos
class entidad {
    constructor(name, hP, armor){
        this.name = name;
        this.hP = hP;
        this.armor = armor;
    }
    accionDeCombate=(atacante, daño, heroe, name)=>{
        if (heroe) {
            //guarda la info del storage en una variable, resta el daño, vacio el cache para poder resubir la nueva info
            let hp = localStorage.getItem(objetivoPosition);              
            hp -= daño;
            localStorage.removeItem(objetivoPosition);
            localStorage.setItem(objetivoPosition,hp);
            console.log(`${atacante.name} hace ${daño} de daño a ${objetivoName}`);
        }else{
            objetivo -= daño;
                console.log(`${atacante.name} hace ${daño} de daño a ${objetivo.name}`);
        }      
    }
}
//ejemplo = heraldo.accionDeCombate(heraldo,4,true);

const cruzado = new entidad("Cruzado", 24)
const heraldo = new entidad("Heraldo",24);
const barbara = new entidad("Barbara", 20);
const arbalestera = new entidad("Arbalestera",18);

const esqueletoEscudero = new entidad("Esqueleto escudero",24);
const esqueletoGuerrero = new entidad("Esqueleto guerrero",20);
const esqueletoArballestero = new entidad("Esqueleto Arballestero",18);

//------------------------------------------------------//
// Variables
let heroe = false;
let ronda = 0;
let rondaIncial = 0;
let img = new Image();

let objetivoName = "";
let objetivoPosition = "";
let heroPosition = "";
let heroName = "";

let hpHero1 = "";
let hpHero2 = "";
let hpHero3 = "";
let hpEnemy1 = "";
let hpEnemy2 = "";
let hpEnemy3 = "";

//------------------------------------------------------//
//Local Storage
const definirHP=(hpHero1,hpHero2,hpHero3,hpEnemy1,hpEnemy2,hpEnemy3)=>{
    localStorage.setItem('hpHero1',hpHero1);
    localStorage.setItem('hpHero2',hpHero2);
    localStorage.setItem('hpHero3',hpHero3);
    localStorage.setItem('hpEnemy1',hpEnemy1);
    localStorage.setItem('hpEnemy2',hpEnemy2);
    localStorage.setItem('hpEnemy3',hpEnemy3);
};
definirHP(heraldo.hP,barbara.hP,arbalestera.hP,esqueletoEscudero.hP,esqueletoGuerrero.hP,esqueletoArballestero.hP);

//------------------------------------------------------//
//DADOS
function dado (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
//------------------------------------------------------//
//Objetivo
const objetive = (roll)=>{
    if (0 === roll){
        return cruzado;
    }else if (1 === roll){
        return barbara;
    }else {
        return arbalestera;
    }
}

//-------------------------------------------------------//
//still alive
const stillAlive=(vida)=>{
    return (localStorage.getItem(objetivoPosition)>0);
}


