/******************Clase_N8_Barrionuebo_Damián******************/

//Declaracion de productos y costos
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
    {producto: "80mm",valor: 500},
    {producto: "120mm", valor: 600},
];
const tarjetaGrafica = [
    {producto: "NVIDIA", valor: 55000},
    {producto: "AMD", valor: 60000},
];

//variables
let costoMother=0;
let costoMemory=0;
let costoStorage=0;
let costoFanCooler=0;
let costoGrafica=0;
let mother=document.getElementById("mother").value;
let memory=document.getElementById("memory").value;
let storagE=document.getElementById("storage").value;
let fancooler=document.getElementById("fanCooler").value;
let grafica=document.getElementById("grafica").value;


//Capturando elementos del DOM
const eventoBoton = document.getElementById("boton");

motherSelect=()=>{
    mother=document.getElementById("mother").value;
    //mother puede ser: MSI, Asrock, EVGA, Asus
    switch (mother) {
        case "MSI":
            buscarCosto("costoMother",motherboard[0].valor);        
            break;
        case "Asrock":
            buscarCosto("costoMother",motherboard[1].valor); 
            break;
        case "EVGA":
            buscarCosto("costoMother",motherboard[2].valor);
            break;
        case "Asus":
            buscarCosto("costoMother",motherboard[3].valor);
            break;
        default:
            costoMother = 0;
            break;       
    }
    costo=document.getElementById("costoMother").value;
}
memoryRamSelect=()=>{
    memory=document.getElementById("memory").value;
    //memory puede ser: ddr3, ddr4
    switch (memory) {
        case "ddr3":
            buscarCosto("costoMemory",memoryRam[0].valor);
            break;
        case "ddr4":
            buscarCosto("costoMemory",memoryRam[1].valor);
        default:
            costoMemory=0;
            break;
    }
    costo=document.getElementById("costoMemory").value;
}
storageSelect=()=>{
    storagE=document.getElementById("storage").value;
    //storage puede ser: Disco solido, Disco duro
    switch (storagE) {
        case "Disco solido":
            buscarCosto("costoStorage", storage[0].valor);
            break;
        case "Disco duro": 
            buscarCosto("costoStorage", storage[1].valor);
        default:
            costoStorage=0;
            break;
    }
    costo=document.getElementById("costoStorage").value;
}
fanSelect=()=>{
    fancooler=document.getElementById("fanCooler").value;
    //fanCooler puede ser: 80mm, 120mm
    switch (fancooler){
        case "80mm":
            buscarCosto("costoFanCooler", fanCooler[0].valor);
            break;
        case "120mm":   
            buscarCosto("costoFanCooler", fanCooler[1].valor);
        default:
            costoFanCooler=0;
            break;
    }
    costo=document.getElementById("costoFanCooler").value;
}
tarjetaGraficaSelect=()=>{
    grafica=document.getElementById("grafica").value;
    //storage puede ser: NVIDIA, AMD
    switch (grafica){
        case "NVIDIA":
            buscarCosto("costoGrafica", storage[0].valor);
            break;
        case "AMD":
            buscarCosto("costoGrafica", storage[1].valor);
            break;
        default:
            costoGrafica=0;
            break;
    }
    costo=document.getElementById("costoGrafica").value;
}

//buscar costo de producto
buscarCosto=(costo, item)=>{
    document.getElementById(costo).innerHTML=`${item}`;
    document.getElementById(costo).value=`${item}`
}

eventoBoton.addEventListener("click", () => {
    //Identificar si la casilla se encuentra vacia de:
    //mother
    if (mother === "") {
        costoMother = 0;
    }else{
        costoMother=parseInt(document.getElementById("costoMother").value);
    }
    //memory
    if (memory === ""){
        costoMemory = 0;
    }else{
        costoMemory=parseInt(document.getElementById("costoMemory").value);
    }
    //storage
    if (storagE === ""){
        costoStorage = 0;
    }else{
        costoStorage=parseInt(document.getElementById("costoStorage").value);
    }
    //fanCooler
    if (fancooler === ""){
        costoFanCooler = 0;
    }else{
        costoFanCooler=parseInt(document.getElementById("costoFanCooler").value);
    }
    //Tarjeta Grafica
    if (grafica === ""){
        costoGrafica = 0;
    }else{
        costoGrafica=parseInt(document.getElementById("costoGrafica").value);
    }
    let total=costoMother+costoMemory+costoStorage+costoFanCooler+costoGrafica;
    alert(`El total a pagar es: ${total}`);
});

