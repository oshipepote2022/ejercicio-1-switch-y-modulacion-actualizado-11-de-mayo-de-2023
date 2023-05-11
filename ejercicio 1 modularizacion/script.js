const select1 = document.querySelector ("select");
const parrafo= document.querySelector ("#precio");
const parrafoTotal= document.querySelector ("#total");
const lista= document.querySelector ("#lista");


const PRECIO_PRODUCTO_1= 500;

let total = PRECIO_PRODUCTO_1+total;

function agregarAlCarrito() {

    switch (parseInt(select1.value)) {
        case 1:
            parrafoTotal.innerHTML= (PRECIO_PRODUCTO_1+total);
            
            break;
        case 3:
            parrafoTotal.innerHTML= (PRECIO_PRODUCTO_1*3);
            break;
        case 7:
            parrafoTotal.innerHTML= (PRECIO_PRODUCTO_1*7);
            break;
    
    }




      
}



function funcionCmbiarPrecio() {
    switch (parseInt(select1.value)) {
        case 1:
            parrafo.innerHTML= PRECIO_PRODUCTO_1;
            break;
        case 3:
            parrafo.innerHTML= (PRECIO_PRODUCTO_1*3);
            break;
        case 7:
            parrafo.innerHTML= (PRECIO_PRODUCTO_1*7);
            break;
        default:
            break;
    }
  
}


