const formu = document.getElementById('formu')
const resultado = document.getElementById('resultado')
let descuento = 0
let total = 0;

function calcularDescuento(valorProductos,cantidadProductos){

    if((valorProductos >= 50000 && valorProductos <= 100000)|| cantidadProductos == 2){
        descuento = valorProductos * 0.1;
    }
    
    else if((valorProductos >= 100000 && valorProductos <= 200000)|| cantidadProductos == 3){
        descuento = valorProductos * 0.15;
    }
    else if(valorProductos > 200000 || cantidadProductos > 3){
        descuento = valorProductos * 0.20;
    }
    return descuento;
}

function descuentos(){
    const valorProductos = parseInt(document.getElementById('valorProductos').value);
    const cantidadProductos = parseInt(document.getElementById('cantidadProductos').value);
    
    

    if(!isNaN(valorProductos) && !isNaN(cantidadProductos)){
        if(valorProductos > 0 && cantidadProductos > 0){
            calcularDescuento(valorProductos,cantidadProductos);
            total = valorProductos - descuento;
            resultado.innerHTML = "El descuento es de: " + descuento + "el valor tota es: " + total;
        }
    }else{
        alert("El valor no es un número");
    }
    
}


