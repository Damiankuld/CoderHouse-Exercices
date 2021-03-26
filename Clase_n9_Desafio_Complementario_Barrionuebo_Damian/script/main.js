//------Clase_n9_Desafio_Complementario_Barrionuebo_Damian------//

const validar=()=>{
    let accesorios=document.querySelector('#accesorios');
    let adornos=document.querySelector('#adornos');
    let articulos =document.querySelector('#articulos');
    let barcos=document.querySelector('#barcos');

    let imagenes1=document.querySelector(`.imgAccesorios`);
    let imagenes2=document.querySelector(`.imgAdornos`);
    let imagenes3=document.querySelector(`.imgArticulos`);
    let imagenes4=document.querySelector(`.imgBarcos`);

    if (accesorios.checked == false){        
        imagenes1.innerHTML = "";
    }if(adornos.checked == false){        
        imagenes2.innerHTML = "";
    }if(articulos.checked == false){        
        imagenes3.innerHTML = "";
    }if(barcos.checked == false){        
        imagenes4.innerHTML = "";
    }else{}
    //----------------------------------------------------------------//
    if(accesorios.checked){
        imagenes1.innerHTML = "";
        imagenes1.innerHTML += '<img src="css/img/accesorios/accesorio (1).jpg">';
        imagenes1.innerHTML += '<img src="css/img/accesorios/accesorio (2).jpg">';
        imagenes1.innerHTML += '<img src="css/img/accesorios/accesorio (3).jpg">';
        imagenes1.innerHTML += '<img src="css/img/accesorios/accesorio (4).jpg">';
    }if(adornos.checked){
        imagenes2.innerHTML = "";
        imagenes2.innerHTML += '<img src="css/img/adornos/adorno (1).jpg">';
        imagenes2.innerHTML += '<img src="css/img/adornos/adorno (2).jpg">';
        imagenes2.innerHTML += '<img src="css/img/adornos/adorno (3).jpg">';
        imagenes2.innerHTML += '<img src="css/img/adornos/adorno (4).jpg">';
    }if(articulos.checked){
        imagenes3.innerHTML = "";
        imagenes3.innerHTML += '<img src="css/img/articulos/articulos (1).jpg">';
        imagenes3.innerHTML += '<img src="css/img/articulos/articulos (2).jpg">';
        imagenes3.innerHTML += '<img src="css/img/articulos/articulos (3).jpg">';
        imagenes3.innerHTML += '<img src="css/img/articulos/articulos (4).jpg">';
    }if(barcos.checked){
        imagenes4.innerHTML = "";
        imagenes4.innerHTML += '<img src="css/img/barcos/barcos (1).jpg">';
        imagenes4.innerHTML += '<img src="css/img/barcos/barcos (2).jpg">';
        imagenes4.innerHTML += '<img src="css/img/barcos/barcos (3).jpg">';
        imagenes4.innerHTML += '<img src="css/img/barcos/barcos (4).jpg">';
    }else{}
}