/******************Clase_N6_Barrionuebo_Damián******************/


class pc {
    constructor (motherboard,memoryRam,storage,tarjetaGrafica,fanCooler){
        this.motherboard = motherboard;
        this.memoryRam = memoryRam;
        this.storage = storage;
        this.tarjetaGrafica = tarjetaGrafica;
        this.fanCooler = fanCooler;
    }
}

const motherboard = ["Asus", "Asrock", "EVGA", "MSI"];
const memoryRam = ["ddr3", "ddr4"];
const storage = ["Disco sólido", "Disco duro"];
const fanCooler = [80, 120];
const tarjetaGrafica = ["AMD", "NVIDIA"];
/*
let armarPC = confirm ("Bienvenido a su asistente de ensamblaje ¿Le gustaria que empecemos?");

if (armarPC === true){
    aviso=alert("A continuación podra escoger de nuestro catalogo y podra ingresar la que desee");

    mother=prompt(`Motherboards: ${motherboard[0]}, ${motherboard[1]}, ${motherboard[2]} o ${motherboard[3]}`);

    memory=prompt(`Memorias ram: ${memoryRam[0]} o ${memoryRam[1]}`);

    storagE=prompt(`Almacenamiento: ${storage[0]} o ${storage[1]}`);

    tarjetaG=prompt(`Tarjetas graficas: ${tarjetaGrafica[0]} o ${tarjetaGrafica[1]}`);
    
    fancooler=prompt(`Fancoolers: ${fanCooler[0]} o ${fanCooler[1]}`);
    
    const usuario=new pc(mother, memory, storagE, tarjetaG, fancooler);

    console.log(`Su computadora ha quedado compuesta de la siguiente manera:`);
    console.table(usuario);

}else{alert=("Tenga buen día")};
*/
/***************************************************************/
//Ordenar un array de objetos

for(let i=0; i<motherboard.length; i+=1){
    console.log(motherboard[i]);
} //recorrer arrays

console.log(memoryRam.toString());





