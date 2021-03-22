/******************Clase_N6_Complementario_Barrionuebo_Damián******************/


const motherboard = [
    {producto: "MSI", valor: 7500},
    {producto: "Asrock", valor: 9500},
    {producto: "EVGA", valor: 5000},
    {producto: "Asus", valor: 11500},
];
const memoryRam = [
    {producto: "ddr3", valor: 6500},
    {producto: "ddr4", valor: 7500},
];
const storage = [
    {producto: "Disco sólido", valor: 5000},
    {producto: "Disco duro", valor: 5500},
];
const fanCooler = [
    {producto: 80, valor: 500},
    {producto: 120, valor: 600},
];
const tarjetaGrafica = [
    {producto: "NVIDIA", valor: 55000},
    {producto: "AMD", valor: 60000},
];



 //Ordenar por nombre
 const OrdenAlfabetico=(id)=>{
    id.sort(function (a, b) {
        if (a.producto > b.producto) {
            return 1;
        }
        if (a.producto < b.producto) {
            return -1;
        }
            return 0;
    });
}
    //Ordenar por precio
const OrdenNumerico=(id)=>{
    id.sort(function (a, b) {
        if (a.valor > b.valor) {
            return 1;
        }
        if (a.valor < b.valor) {
            return -1;
        }
            return 0;
  });
}
//Acción
/*
let activacion= alert("A continuación le daremos a escoger entre nuestro catalogo de productos");
let pregunta1= prompt("¿Qué productos le gustaria inspeccionar? Motherboard, Memoria ram, Almacenamiento interno, Tarjeta grafica o Fancooler");
let pregunta2= confirm("¿Desea ordenarlo alfabeticamente?");

if(pregunta1.toUpperCase() === "MOTHERBOARD"){
    if(pregunta2===true){
        OrdenAlfabetico(motherboard);
        console.table(motherboard);
    }else{
        OrdenNumerico(motherboard);
        console.table(motherboard)}
}else if(pregunta1.toUpperCase() === "MEMORIA RAM"){
    if(pregunta2===true){
        OrdenAlfabetico(memoryRam);
        console.table(memoryRam);
    }else{
        OrdenNumerico(memoryRam);
        console.table(memoryRam)}
}else if(pregunta1.toUpperCase() === "ALMACENAMIENTO INTERNO"){
    if(pregunta2===true){
        OrdenAlfabetico(storage);
        console.table(storage);
    }else{
        OrdenNumerico(storage);
        console.table(storage)}
}else if(pregunta1.toUpperCase() === "TARJETA GRAFICA"){
    if(pregunta2===true){
        OrdenAlfabetico(tarjetaGrafica);
        console.table(tarjetaGrafica);
    }else{
        OrdenNumerico(tarjetaGrafica);
        console.table(tarjetaGrafica)}
}else if(pregunta1.toUpperCase() === "FANCOOLER"){
    if(pregunta2===true){
        OrdenAlfabetico(fanCooler);
        console.table(fanCooler);
    }else{
        OrdenNumerico(fanCooler);
        console.table(fanCooler)}
}else{console.log("Categoria invalida");}


const buscardatos=()=>{
}
*/

Seleccion=()=>{
    indexSelect=document.getElementById("productos").Value;
}

console.log(motherboard[0].valor);


const price=()=>{
    let ingreso = document.getElementById(`productos`).value;

    switch (inderxSelect){
        case "MSI":
            document.getElementById(`costo`).innerText = `${motherboard[0].valor}`
            break;
        case "Asrock":
            document.getElementById(`mother`).innerText = `${motherboard[1].valor}`
    
        default:
            break;
    }
}
