let valorTotal = prompt("Digite el valor total");
let cantidadProductos = prompt("Cuantos productos va adquerir");
let descuento = 0;
let total = 0;

function calcularDescuento(valorTotal,cantidadProductos){

    if((valorTotal >= 50000 && valorTotal <= 100000)|| cantidadProductos == 2){
        descuento = valorTotal * 0.1;
    }
    else if((valorTotal > 100000 && valorTotal <= 200000) || cantidadProductos == 3){
        descuento = valorTotal * 0.15;
    }
    else if(valorTotal > 200000 || cantidadProductos > 3){
        descuento = valorTotal * 0.2;
    }

    return descuento;
}

if(!isNaN(valorTotal) && !isNaN(cantidadProductos)){
    if(valorTotal > 0 && cantidadProductos > 0){
        calcularDescuento(valorTotal,cantidadProductos);
        total = valorTotal - descuento;
        alert("El descuneto es de "+ descuento + " total a pagar es: " + total);
    }
}
else{
    alert("El valor no es un número");
}