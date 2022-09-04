
//Se evalua que cuadro se esta seleccionando
for(let i=1;i<=64;i++){
    document.getElementById(i).addEventListener("mouseover", mouseOver);
    document.getElementById(i).addEventListener("mouseout", mouseOut);
}


function mouseOver(Event){
    //llamar a funcion que regrese el titulo del diagrama y la descripciones
    var id = Event.currentTarget.id;
    //console.log(id);
    //console.log(typeof(id));
    //valorid= parseInt(id.value);
    //console.log(typeof(valorid));
    var datos = obtenerHexagramaID(parseInt(id));
    console.log(datos.titulo + datos.descripcion);


    document.getElementById('hexagrama-descripcion-tabla').style.visibility="visible";
    document.getElementById('hexagrama-descripcion-tabla').style.opacity=1;
    document.getElementById("hexagrama-descripcion-tabla-nombre-hover").innerHTML = datos.titulo;
    document.getElementById("hexagrama-descripcion-tabla-hover").innerHTML = datos.descripcion; 

    document.getElementById("hexagrama-descripcion-tabla").style.animationName = "fondo"; 
    document.getElementById("hexagrama-descripcion-tabla").style.animationDuration = "4s"; 
    document.getElementById("hexagrama-descripcion-tabla").style.animationIterationCount = "infinite";

}

function  mouseOut(Event){
    //Se oculta el div con toda la información
    document.getElementById('hexagrama-descripcion-tabla').style.visibility = 'none';
    document.getElementById('hexagrama-descripcion-tabla').style.opacity=0;
}