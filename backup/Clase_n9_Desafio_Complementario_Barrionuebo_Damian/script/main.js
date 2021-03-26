/*************Clase_n9_Desafio_Complementario_Barrionuebo_Damian*************/


//Declaracion de productos y costos

const motherboard = [
    {model: "Prime A320m-k", brand: "MSI", price: 8500, stock: 13},
    {model: "B450 Aorus Elite", brand: "Gigabyte", price: 16500, stock: 13},
    {model: "AB350M-HDV", brand: "Asrock", price: 7200, stock: 14},
    {model: "B460M-PR04", brand: "Asrock", price: 15000, stock: 4},
    {model: "FTW-K", brand: "EVGA", price: 5000, stock: 11},
    {model: "H310M-R R2.0", brand: "Asus", price: 7200, stock: 12},
    {model: "A320M-K", brand: "Asus", price: 11500, stock: 7},
    {model: "ROG STRIX B550-F", brand: "Asus", price: 27500, stock: 3},
];
const memoryRam = [
    {model: "KVR1333D3N9", brand: "Hyper X", price: 8500, stock: 44, tecnology: "ddr3", capacity: "8gb"},
    {model: "CMK8GX4M1D3000", brand: "Corsair", price: 6500, stock: 44, tecnology: "ddr3", capacity: "8gb"},
    {model: "HX426C16FB4", brand: "Kingstone", price: 13500, stock: 44, tecnology: "ddr3", capacity: "16gb"},
    {model: "3466 Ddr4 Hyx Fury Rgb", brand: "Hyper X", price: 9500, stock: 17, tecnology: "ddr4", capacity: "8gb"},
    {model: "HX429C15PB3AK2", brand: "Corsair", price: 17500, stock: 17, tecnology: "ddr4", capacity: "16gb"},
];
const storage = [
    {model: "SA400S37", brand: "Kingston", price: 5000, stock: 12, tecnology: "Disco sólido", capacity: "120gb"},
    {model: "SA400S37", brand: "Kingston", price: 4000, stock: 22, tecnology: "Disco sólido", capacity: "240gb"},
    {model: "SA400S37", brand: "Kingston", price: 7000, stock: 32, tecnology: "Disco sólido", capacity: "4480bg"},
    {model: "SA400S37", brand: "Kingston", price: 12000, stock: 16, tecnology: "Disco sólido", capacity: "960gb"},
    {model: "WDS240G2G0A", brand: "western digital", price: 5300, stock: 17, tecnology: "Disco sólido", capacity: "240"},
    {model: "WD10EZEX", brand: "western digital", price: 5000, stock: 1, tecnology: "Disco duro", capacity: "1tb"},
    {model: "WD20EZRZ", brand: "western digital", price: 8500, stock: 1, tecnology: "Disco duro", capacity: "2tb"},
    {model: "ST1000DM010", brand: "Seagate", price: 4500, stock: 1, tecnology: "Disco duro", capacity: "1tb"},
];
const fanCooler = [
    {model: "CT 3 M", brand: "VT-Fan", price: 1200, stock: 45, size: "80mm"},
    {model: "CT 4 A", brand: "VT-Fan", price: 1600, stock: 32, size: "120mm"},
    {model: "Mirage 12", brand: "Aerocool", price: 1900, stock: 22, size: "120mm"},
];
const tarjetaGrafica = [
    {model: "GeForce Series RTX 3070", brand: "NVIDIA", price: 245000, stock: 5},
    {model: "Rtx 3080 10gb", brand: "Asus", price: 475000, stock: 3},
    {model: "Rtx 3090 Xtreme Water", brand: "Gigabyte", price: 350000, stock: 1},
]

motherSelect=()=>{
    mother=document.getElementById("mother").value;
    //mother puede ser: MSI, Asrock, EVGA, Asus
    switch (mother) {
        case "MSI":
            buscarCosto("costoMother",motherboard[0].valor);
            let imgMother1=document.querySelector(`#imgMother`);
            imgMother1.innerHTML=`<img src="css/MSI-Logo.webp">`;  
            break;
        case "Asrock":
            buscarCosto("costoMother",motherboard[1].valor);
            let imgMother2=document.querySelector(`#imgMother`);
            imgMother2.innerHTML=`<img src="css/ASRock-Logo.png">`
            break;
        case "EVGA":
            buscarCosto("costoMother",motherboard[2].valor);
            let imgMother3=document.querySelector(`#imgMother`);
            imgMother3.innerHTML=`<img src="css/evga.png">`
            break;
        case "Asus":
            buscarCosto("costoMother",motherboard[3].valor);
            let imgMother4=document.querySelector(`#imgMother`);
            imgMother4.innerHTML=`<img src="css/Asus-Logo.png">`
            break;
        default:
            costoMother = 0;
            break;       
    }
    costo=document.getElementById("costoMother").value;
}


