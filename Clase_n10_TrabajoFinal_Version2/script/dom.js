//--------------------------DOM--------------------------//
//Mostrar y ocultar atributos de heroe
mostrar=()=>{
    document.querySelector(`#infoHero`).style.display = ``;
}
ocultar=()=>{
    document.querySelector(`#infoHero`).style.display = `none`;
}
//ocultar();

//-------------------------------------------------------//
//mostrar skills
const showContent=(hero,entidad,storage)=>{
    //ocultar();
    mostrar();
    //nombre y estadisticas
    let healthPoint = localStorage.getItem(storage);
    let statsHero = document.querySelector(`#statsHero`);
    statsHero.innerText=`${healthPoint}`;
    let nameHero = document.querySelector(`#nameHero`);
    nameHero.innerText=`${entidad.name}`;
    //skills
    let skillDOM1=document.querySelector(`#skillSlot1`);
    skillDOM1.innerHTML=`<img src="assets/images/chapters/${hero}/skills/${hero}.ability.one.png">`;
    let skillDOM2=document.querySelector(`#skillSlot2`);
    skillDOM2.innerHTML=`<img src="assets/images/chapters/${hero}/skills/${hero}.ability.two.png">`;
    let skillDOM3=document.querySelector(`#skillSlot3`);
    skillDOM3.innerHTML=`<img src="assets/images/chapters/${hero}/skills/${hero}.ability.three.png">`;
    let skillDOM4=document.querySelector(`#skillSlot4`);
    skillDOM4.innerHTML=`<img src="assets/images/chapters/${hero}/skills/${hero}.ability.four.png">`;
    let skillDOM5=document.querySelector(`#skillSlot5`);
    skillDOM5.innerHTML=`<img src="assets/images/chapters/${hero}/skills/${hero}.ability.five.png">`;
    //portrait
    let portrait=document.querySelector(`#portraitHero`);
    portrait.innerHTML=`<img src="assets/images/chapters/portraits/${hero}.png">`;
    //Equip
}
//showContent('cruzado', cruzado, hpHero1);
//showContent('barbara', barbara, hpHero2);
//showContent('arbalestera', arbalestera, hpHero3);

//-------------------------------------------------------//
//Enemy
function showContentEnemy(name,position){
    let hP = localStorage.getItem(position);
    let nameEnemy = document.querySelector(`#nameEnemy`);
    nameEnemy.innerText = `${name}`;
    let hpEnemy = document.querySelector(`#hpEnemy`);
    hpEnemy.innerText="HP:" + hP;
    objetivoName = name;
    objetivoPosition = position;
}

//showContentEnemy(esqueletoEscudero.name,'hpEnemy1');
showEnemy=()=>{
    document.querySelector(`#statsEnemy`).style.display = ``;
}
hideEnemy=()=>{
    document.querySelector(`#statsEnemy`).style.display = `none`;
}