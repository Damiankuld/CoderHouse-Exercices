//------------------------------------------------------//
//prueba de combate que funciona
const prueba=(atacante, daño, name)=>{
    //guarda la info del storage en una variable, resta el daño, vacio el cache para poder resubir la nueva info
    let hpEnemy1 = localStorage.getItem("hpEnemy1");              
    hpEnemy1 -= daño;
    localStorage.removeItem('hpEnemy1');
    localStorage.setItem(`hpEnemy1`,hpEnemy1);
    console.log(`${atacante.name} hace ${daño} de daño a ${name}`);
    console.log(`hpEnemy1: ${hpEnemy1}`);
}
//------------------------------------------------------//
function showContentEnemyOther(name, health, slot){
    let hpEnemy1 = localStorage.getItem("hpEnemy1");
    let nameEnemy = document.querySelector(`#nameEnemy`);
    nameEnemy.innerText = `${name}`;
    let hpEnemy = document.querySelector(`#hpEnemy`);
    hpEnemy.innerText=`HP: ${hpEnemy1}`;
    objetivoName = name;
    objetivoSlot = slot;
}
//showContentEnemy(esqueletoEscudero.name, esqueletoEscudero.hP, hpEnemy1;

//------------------------------------------------------//
//prueba(heraldo,6,"esqueleto");
//onclick="prueba(heraldo,6,'esqueleto');"

//heraldo.accionDeCombate(heraldo,objetivoActual,dado(0, 6),true);

//console.log(`hpEnemy1: ${hpEnemy1}`);
//console.log(`${hpEnemy1}:``${hpEnemy1}`);
//------------------------------------------------------//




//------------------------------------------------------//
/*objetivoDOM=()=>{
    let objetivo = document.querySelector(``);

}
*/
/*
heraldo.accionDeCombate(
    //atacante (facil)
    heraldo,
    //indentificar objetivo mediante alguna funcion con dom onclick
    objetive(dado(2, 3)),
    //daño (easy)
    dado(0, 6),
    //seleccion de accion mediento boolean al detectar si es heroe o no
    true
);*/
//------------------------------------------------------//
//Veneno | Sangrado
//dañoPorTurno(objetive(dado(2,3)), 1);
/*
const dañoPorTurno=(objetivo, nivel)=>{
    rondaIncial = rondaFinal;
    if(rondaIncial){

    }else{

    }    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];        
    }
    for (let i = 0; i< rondaFinal; i+=i){

        objetivo.hP -= nivel;   
        if(rondaIncial===rondaFinal){
            break;
        }        
        console.log(`dañoPorTurno en ${objetivo} vida:${[i]}`);
    }

    if(veneno === tipo){
        "css veneno";
    }else{
        "css hemorragia";
    }
}
*/
//------------------------------------------------------//


