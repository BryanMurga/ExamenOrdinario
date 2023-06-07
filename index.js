const powerButton = document.getElementById("power")
const subirVolumenButton = document.getElementById("subirVolumen")
const subirCanalButton = document.getElementById("subirCanal")
const silenciarButton = document.getElementById("silenciar")
const bajarVolumenButton = document.getElementById("bajarVolumen")
const bajarCanalButton = document.getElementById("bajarCanal")

var volumenValor = 3;

const datos = {
    power: true,
    volumen: 3,
    canal: 7,
    silenciar: false
};

powerButton.addEventListener("click", () =>{
    datos.power = !datos.power;

    if(datos.power){
        subirVolumenButton.disabled = false;
        subirCanalButton.disabled = false;
        silenciarButton.disabled = false;
        bajarVolumenButton.disabled = false;
        bajarCanalButton.disabled = false;
        console.log("Television prendida");
        console.log(datos);
        

    }else{

        subirVolumenButton.disabled = true;
        subirCanalButton.disabled = true;
        silenciarButton.disabled = true;
        bajarVolumenButton.disabled = true;
        bajarCanalButton.disabled = true;
        console.log("Television apagada");
        console.log(datos);
        
    }
})

subirVolumenButton.addEventListener("click", () =>{
    if(datos.volumen < 11 && datos.volumen >=1){
        datos.volumen++;
            console.log(datos);
            volumenValor = datos.volumen;
        
    }else if(datos.volumen > 10){
        console.log("Volumen al maximo")
    }

    

})

bajarVolumenButton.addEventListener("click", () =>{
    if(datos.volumen <= 10 && datos.volumen>=1){
        datos.volumen--;
            console.log(datos);
            volumenValor = datos.volumen;
        
        
    }else if(datos.volumen <=1) {
        console.log("Volumen al minimo")
    }

    

})

subirCanalButton.addEventListener("click", () =>{
    if(datos.canal <= 100 && datos.canal >=1){
        datos.canal++;
            console.log(datos);
        
    }else if(datos.volumen > 100){
        console.log("Volumen al maximo")
    }

    

})

bajarCanalButton.addEventListener("click", () =>{
    if(datos.canal <= 100 && datos.volumen>=1){
        datos.canal--;
            console.log(datos);
        
        
    }else if(datos.canal <=1) {
        console.log("Volumen al minimo")
    }

})

silenciarButton.addEventListener("click", ()=>{
    if(datos.silenciar){
        datos.silenciar = false;
        datos.volumen = volumenValor;
        console.log(datos)
    }else{
        datos.silenciar = true;
        datos.volumen = 0;
        console.log(datos)
    }
    
})


