//variables que guaradaran los hexagramas
var hex_principal = [];
var hex_mut1 = [];
var hex_mut2 = [];

document.getElementById("diagram1").style.display = "none";
document.getElementById("diagram3").style.display = "none";
//funciones de mostrar contenido


//agregar una linea del hexagrama
function agregarLínea(){
    var num1=document.getElementById("H1");
    var num2=document.getElementById("H2");
    var num3=document.getElementById("H3");


    if ((num1.value.length == 0) || (num2.value.length == 0) || (num3.value.length == 0)) {
        window.alert("Debe llenar los tres campos.");
    }
    else{
        //crear linea cuando son menores a 6
        if (!(hex_principal.length == 6)) {
            var suma=parseInt(num1.value)+parseInt(num2.value)+parseInt(num3.value);  
            hex_principal.push(suma);

            //genera linea de texto
            var linebreak_hex_prin = document.createElement("br");
            var linebreak_hex_mut1 = document.createElement("br");
            var linebreak_hex_mut2 = document.createElement("br");
            

            var contenido_hex_prin, contenido_hex_mut1, contenido_hex_mut2;
            //crear los diferentes casos
            switch(suma){

                case 6: //caso de la linea mutante yin
                    console.log("Generando linea yin mutante ___x___ ...");
                    contenido_hex_prin = document.createTextNode("___x___");
                    //hexagrama mut 1
                    contenido_hex_mut1 = document.createTextNode('___\u00A0\u00A0___');
                    hex_mut1.push(8);
                    //hexagrama mut 2
                    contenido_hex_mut2 = document.createTextNode("_______");
                    hex_mut2.push(7);
                    break;

                case 7:
                    console.log("Generando linea yang _______ ...");
                    contenido_hex_prin = document.createTextNode("_______");
                    //hexagrama mut 1
                    contenido_hex_mut1 = document.createTextNode("_______");
                    hex_mut1.push(suma);
                    //hexagrama mut 2
                    contenido_hex_mut2 = document.createTextNode("_______");
                    hex_mut2.push(suma);
                    break;

                case 8:
                    console.log("Generando linea yin ___ ___ ...");
                    contenido_hex_prin = document.createTextNode('___\u00A0\u00A0___');
                    //hexagrama mut 1
                    contenido_hex_mut1 = document.createTextNode('___\u00A0\u00A0___');
                    hex_mut1.push(suma);
                    //hexagrama mut 2
                    contenido_hex_mut2 = document.createTextNode('___\u00A0\u00A0___');
                    hex_mut2.push(suma);
                    break;

                case 9:
                    console.log("Generando linea yang mutante ___o___ ...");
                    contenido_hex_prin = document.createTextNode("___o___");
                    //hexagrama mut 1
                    contenido_hex_mut1 = document.createTextNode("_______");
                    hex_mut1.push(7);
                    //hexagrama mut 2
                    contenido_hex_mut2 = document.createTextNode('___\u00A0\u00A0___');
                    hex_mut2.push(8);
                    break;
                
                default:
                    alert("No se ha podido generar la línea correctamente");
                    break;
            }

            document.getElementById("dgm2").insertBefore(linebreak_hex_prin, document.getElementById("dgm2").firstChild);
            document.getElementById("dgm2").insertBefore(contenido_hex_prin, document.getElementById("dgm2").firstChild);

            document.getElementById("dgm1").insertBefore(linebreak_hex_mut1, document.getElementById("dgm1").firstChild);
            document.getElementById("dgm1").insertBefore(contenido_hex_mut1, document.getElementById("dgm1").firstChild);

            document.getElementById("dgm3").insertBefore(linebreak_hex_mut2, document.getElementById("dgm3").firstChild);
            document.getElementById("dgm3").insertBefore(contenido_hex_mut2, document.getElementById("dgm3").firstChild);

            resetearEntradas();
            console.log(hex_principal);
            console.log(hex_mut1);
            console.log(hex_mut2);

            showDescription(hex_principal, hex_mut1, hex_mut2);

        }

        else{
            window.alert("Un hexagrama solo puede contener 6 líneas");
        }
    }

    if(hex_principal.length==6){//ya tiene sus lineas

        if (hex_principal.indexOf(6) != -1) {
            document.getElementById("diagram1").style.display = "block";
            

            document.getElementById("dgm1").style.animationName = "fondo"; 
            document.getElementById("dgm1").style.animationDuration = "2s"; 
            document.getElementById("dgm1").style.animationIterationCount = "infinite";

            document.getElementById("diagram3").style.display = "block";
         
            document.getElementById("dgm3").style.animationName = "fondo"; 
            document.getElementById("dgm3").style.animationDuration = "2s"; 
            document.getElementById("dgm3").style.animationIterationCount = "infinite";
            console.log("Mutant by 6 line value found.")    
        } 
        else {
            if (hex_principal.indexOf(9) != -1) {
                document.getElementById("diagram1").style.display = "block";
                document.getElementById("dgm1").style.animationName = "fondo"; 
                document.getElementById("dgm1").style.animationDuration = "2s"; 
                document.getElementById("dgm1").style.animationIterationCount = "infinite";

                document.getElementById("diagram3").style.display = "block";
                document.getElementById("dgm3").style.animationName = "fondo"; 
                document.getElementById("dgm3").style.animationDuration = "2s"; 
                document.getElementById("dgm3").style.animationIterationCount = "infinite";
            }
            console.log("Mutant by 9 line value found.");    
        }

    
    }
    else{
        document.getElementById("H1").focus();
    }
}

//Generar Linea Aleatoria
function generarLineaAleatoria(){
    var num1=document.getElementById("H1");
    var num2=document.getElementById("H2");
    var num3=document.getElementById("H3");


    if ((num1.value.length != 0) || (num2.value.length != 0) || (num3.value.length != 0)) {
        window.alert("No debe llenar ningun campo para genera la linea");
        resetearEntradas();
    }
    else{
        //crear linea cuando son menores a 6
        if (!(hex_principal.length == 6)) {
            var suma=Math.floor(Math.random()*(4-2))+2 + Math.floor(Math.random()*(4-2))+2 + Math.floor(Math.random()*(4-2))+2;;  
            hex_principal.push(suma);

            //genera linea de texto
            var linebreak_hex_prin = document.createElement("br");
            var linebreak_hex_mut1 = document.createElement("br");
            var linebreak_hex_mut2 = document.createElement("br");
            

            var contenido_hex_prin, contenido_hex_mut1, contenido_hex_mut2;
            //crear los diferentes casos
            switch(suma){

                case 6: //caso de la linea mutante yin
                    console.log("Generando linea yin mutante ___x___ ...");
                    contenido_hex_prin = document.createTextNode("___x___");
                    //hexagrama mut 1
                    contenido_hex_mut1 = document.createTextNode('___\u00A0\u00A0___');
                    hex_mut1.push(8);
                    //hexagrama mut 2
                    contenido_hex_mut2 = document.createTextNode("_______");
                    hex_mut2.push(7);
                    break;

                case 7:
                    console.log("Generando linea yang _______ ...");
                    contenido_hex_prin = document.createTextNode("_______");
                    //hexagrama mut 1
                    contenido_hex_mut1 = document.createTextNode("_______");
                    hex_mut1.push(suma);
                    //hexagrama mut 2
                    contenido_hex_mut2 = document.createTextNode("_______");
                    hex_mut2.push(suma);
                    break;

                case 8:
                    console.log("Generando linea yin ___ ___ ...");
                    contenido_hex_prin = document.createTextNode('___\u00A0\u00A0___');
                    //hexagrama mut 1
                    contenido_hex_mut1 = document.createTextNode('___\u00A0\u00A0___');
                    hex_mut1.push(suma);
                    //hexagrama mut 2
                    contenido_hex_mut2 = document.createTextNode('___\u00A0\u00A0___');
                    hex_mut2.push(suma);
                    break;

                case 9:
                    console.log("Generando linea yang mutante ___o___ ...");
                    contenido_hex_prin = document.createTextNode("___o___");
                    //hexagrama mut 1
                    contenido_hex_mut1 = document.createTextNode("_______");
                    hex_mut1.push(7);
                    //hexagrama mut 2
                    contenido_hex_mut2 = document.createTextNode('___\u00A0\u00A0___');
                    hex_mut2.push(8);
                    break;
                
                default:
                    alert("No se ha podido generar la línea correctamente");
                    break;
            }

            document.getElementById("dgm2").insertBefore(linebreak_hex_prin, document.getElementById("dgm2").firstChild);
            document.getElementById("dgm2").insertBefore(contenido_hex_prin, document.getElementById("dgm2").firstChild);

            document.getElementById("dgm1").insertBefore(linebreak_hex_mut1, document.getElementById("dgm1").firstChild);
            document.getElementById("dgm1").insertBefore(contenido_hex_mut1, document.getElementById("dgm1").firstChild);

            document.getElementById("dgm3").insertBefore(linebreak_hex_mut2, document.getElementById("dgm3").firstChild);
            document.getElementById("dgm3").insertBefore(contenido_hex_mut2, document.getElementById("dgm3").firstChild);

            resetearEntradas();
            console.log(hex_principal);
            console.log(hex_mut1);
            console.log(hex_mut2);

            showDescription(hex_principal, hex_mut1, hex_mut2);

        }

        else{
            window.alert("Un hexagrama solo puede contener 6 líneas");
        }
    }

    if(hex_principal.length==6){//ya tiene sus lineas

        if (hex_principal.indexOf(6) != -1) {
            document.getElementById("diagram1").style.display = "block";
            document.getElementById("dgm1").style.animationName = "fondo"; 
            document.getElementById("dgm1").style.animationDuration = "2s"; 
            document.getElementById("dgm1").style.animationIterationCount = "infinite";

            document.getElementById("diagram3").style.display = "block";
            document.getElementById("dgm3").style.animationName = "fondo"; 
            document.getElementById("dgm3").style.animationDuration = "2s"; 
            document.getElementById("dgm3").style.animationIterationCount = "infinite";
            console.log("Mutant by 6 line value found.")     
        } 
        else {
            if (hex_principal.indexOf(9) != -1) {
                document.getElementById("diagram1").style.display = "block";
                document.getElementById("dgm1").style.animationName = "fondo"; 
                document.getElementById("dgm1").style.animationDuration = "2s"; 
                document.getElementById("dgm1").style.animationIterationCount = "infinite";

                document.getElementById("diagram3").style.display = "block";
                document.getElementById("dgm3").style.animationName = "fondo"; 
                document.getElementById("dgm3").style.animationDuration = "2s"; 
                document.getElementById("dgm3").style.animationIterationCount = "infinite";
            }
            console.log("Mutant by 9 line value found.");    
        }
    }
    else{
        //document.getElementById("H1").focus();
    }
    
}

 //borrar la ultima linea del hexagrama
function borrarLínea(){
    if(hex_principal.length==6){
        document.getElementById("diagram1").style.display="none";
        document.getElementById("diagram3").style.display="none";
    }

     if(!hex_principal.length==0){
        //Se eliminan los últimos elementos
        hex_principal.pop();
        hex_mut1.pop();
        hex_mut2.pop();
        console.log("Eliminando úlitma linea");
        //
        var last_line_hex_prin, last_line_hex_mut1, last_line_hex_mut2;
        for (var i = 0; i < 2; i++) {
            last_line_hex_prin = document.getElementById("dgm2").firstChild;
            document.getElementById("dgm2").removeChild(last_line_hex_prin);
            last_line_hex_mut1 = document.getElementById("dgm1").firstChild;
            document.getElementById("dgm1").removeChild(last_line_hex_mut1);
            last_line_hex_mut2 = document.getElementById("dgm3").firstChild;
            document.getElementById("dgm3").removeChild(last_line_hex_mut2);

        }
        console.log(last_line_hex_prin);
        console.log(last_line_hex_mut1);
        console.log(last_line_hex_mut2);
    }
    else{
        window.alert("No hay más líneas");
    }

    document.getElementById("hexagrama-descripcion-resultado-1").style.display = "none";
    document.getElementById("hexagrama-descripcion-resultado-2").style.display = "none";
    document.getElementById("hexagrama-descripcion-resultado-3").style.display = "inline-block";
    document.getElementById('hexagrama-descripcion-resultado-3').style.display = 'inline-block';

    document.getElementById("hexagrama-descripcion-resultado-3").style.animationName = ""; 
    document.getElementById("hexagrama-descripcion-resultado-3").style.animationDuration = ""; 
    document.getElementById("hexagrama-descripcion-resultado-3").style.animationIterationCount = "";


    document.getElementById('hexagrama-descripcion-resultado-nombre-3').innerHTML = "";
    document.getElementById('hexagrama-descripcion-result-3').innerHTML = "";
    document.getElementById('diagram2-title').innerHTML = "";
    document.getElementById('diagram2-title').style.fontWeight="";

    document.getElementById("dgm2").style.animationName = ""; 
    document.getElementById("dgm2").style.animationDuration = ""; 
    document.getElementById("dgm2").style.animationIterationCount = "";

    resetearEntradas();
    desseleccionar();
    document.getElementById("digit_1").focus();
 }

//borrar Hexagrama
function borrarHexagrama(){
    
    resetearEntradas();
    document.getElementById("diagram1").style.display = "none";
    document.getElementById("diagram3").style.display = "none";

    document.getElementById('hexagrama-descripcion-resultado-3').style.display = 'inline-block';

    document.getElementById("hexagrama-descripcion-resultado-3").style.animationName = ""; 
    document.getElementById("hexagrama-descripcion-resultado-3").style.animationDuration = ""; 
    document.getElementById("hexagrama-descripcion-resultado-3").style.animationIterationCount = "";


    document.getElementById('hexagrama-descripcion-resultado-nombre-3').innerHTML = "";
    document.getElementById('hexagrama-descripcion-result-3').innerHTML = "";
    document.getElementById('diagram2-title').innerHTML = "";

    var last_line_hex_prin, last_line_hex_mut1, last_line_hex_mut2;
    for (var i = 0; i < (hex_principal.length) * 2; i++) {
        last_line_hex_prin = document.getElementById("dgm2").firstChild;
        document.getElementById("dgm2").removeChild(last_line_hex_prin);
        last_line_hex_mut1 = document.getElementById("dgm1").firstChild;
        document.getElementById("dgm1").removeChild(last_line_hex_mut1);
        last_line_hex_mut2 = document.getElementById("dgm3").firstChild;
        document.getElementById("dgm3").removeChild(last_line_hex_mut2);
    }

    hex_principal = [];
    hex_mut1 = [];
    hex_mut2 = [];
    
    console.log("Borrando hexagrama...");
    console.log(hex_principal);
    console.log(hex_mut1);
    console.log(hex_mut2);
    document.getElementById("H1").focus();

    //descripciones de los hexagramas
    document.getElementById('hexagrama-descripcion-resultado-1').style.display = 'none';
    document.getElementById('hexagrama-descripcion-resultado-2').style.display = 'none';
    document.getElementById('diagram2-title').style.fontWeight="";

    document.getElementById("dgm2").style.animationName = ""; 
    document.getElementById("dgm2").style.animationDuration = ""; 
    document.getElementById("dgm2").style.animationIterationCount = "";
    
    desseleccionar();
    resetearEntradas();
}

//generar las descripciones
function showDescription(hex_principal, hex_mut1, hex_mut2) {
    if(hex_principal.length == 6) {
        if (hex_principal.indexOf(6) != -1 || hex_principal.indexOf(9) != -1) {//Se busca si hay alguna linea mutante

            var datos = obtenerHexagramaValor(hex_mut1);
            var datos2 = obtenerHexagramaID(datos);

            var datos3 = obtenerHexagramaValor(hex_mut2);
            var datos4 = obtenerHexagramaID(datos3);

            console.log(datos);
            console.log(datos2.titulo + datos2.descripcion);
            console.log(datos3);
            console.log(datos4.titulo + datos4.descripcion);

            document.getElementById('hexagrama-descripcion-resultado-1').style.display = 'inline-block';
            document.getElementById('hexagrama-descripcion-resultado-nombre-1').innerHTML = datos2.titulo;
            document.getElementById('diagram1-title').innerHTML = datos2.titulo;
            document.getElementById('diagram1-title').style.fontWeight="bold";
            document.getElementById('hexagrama-descripcion-result-1').innerHTML = datos2.descripcion;

            document.getElementById('diagram2-title').innerHTML = "Hexagrama";
            document.getElementById('diagram2-title').style.fontWeight="bold";

            document.getElementById('hexagrama-descripcion-resultado-2').style.display = 'inline-block';
            document.getElementById('hexagrama-descripcion-resultado-nombre-2').innerHTML = datos4.titulo;
            document.getElementById('diagram3-title').innerHTML = datos4.titulo;
            document.getElementById('diagram3-title').style.fontWeight="bold";
            document.getElementById('hexagrama-descripcion-result-2').innerHTML = datos4.descripcion;


            document.getElementById("hexagrama-descripcion-resultado-1").style.animationName = "contornos"; 
            document.getElementById("hexagrama-descripcion-resultado-1").style.animationDuration = "2s"; 
            document.getElementById("hexagrama-descripcion-resultado-1").style.animationIterationCount = "infinite";
            
            document.getElementById("hexagrama-descripcion-resultado-2").style.animationName = "contornos"; 
            document.getElementById("hexagrama-descripcion-resultado-2").style.animationDuration = "2s"; 
            document.getElementById("hexagrama-descripcion-resultado-2").style.animationIterationCount = "infinite";
            
            
            
            
            
            document.getElementById('hexagrama-descripcion-resultado-3').style.display = 'none';
            seleccionar(datos, datos3);
        } 
        else if(hex_principal.indexOf(6) == -1 || hex_principal.indexOf(9) == -1) {
            
            var datos = obtenerHexagramaValor(hex_principal);
            var datos2 = obtenerHexagramaID(datos);

            console.log(datos);
            console.log(datos2.titulo + datos2.descripcion);

            document.getElementById('hexagrama-descripcion-resultado-3').style.display = 'inline-block';
            document.getElementById('hexagrama-descripcion-resultado-nombre-3').innerHTML = datos2.titulo;
            document.getElementById('hexagrama-descripcion-result-3').innerHTML = datos2.descripcion;
            document.getElementById('diagram2-title').innerHTML = datos2.titulo;
            document.getElementById('diagram2-title').style.fontWeight="bold";

            document.getElementById("hexagrama-descripcion-resultado-3").style.animationName = "contornos"; 
            document.getElementById("hexagrama-descripcion-resultado-3").style.animationDuration = "2s"; 
            document.getElementById("hexagrama-descripcion-resultado-3").style.animationIterationCount = "infinite";

            document.getElementById('hexagrama-descripcion-resultado-2').style.display = 'none';
            document.getElementById('hexagrama-descripcion-resultado-1').style.display = 'none';

            seleccionar(datos, datos);
        }

        document.getElementById("dgm2").style.animationName = "fondo"; 
        document.getElementById("dgm2").style.animationDuration = "2s"; 
        document.getElementById("dgm2").style.animationIterationCount = "infinite";
    }
}

//funciones extra
function resetearEntradas(){
    document.getElementById("H1").value = "";
    document.getElementById("H2").value = "";
    document.getElementById("H3").value = "";
}

//funciones de sombreado
function seleccionar(id, id2) {
    document.getElementById(id).style.backgroundColor = ' rgb(28, 139, 243)';
    document.getElementById(id).style.opacity= '1'
    document.getElementById(id2).style.backgroundColor = ' rgb(28, 139, 243)';
    document.getElementById(id2).style.opacity= '1';
}

function desseleccionar(){
    for(var i=1;i<=64;i++){
        document.getElementById(i).style.backgroundColor = '';
        //document.getElementById(i).style.opacity = ".7"; 
    }
    document.getElementById('diagram2-title').innerHTML = "Hexagram";
    document.getElementById('hexagrama-descripcion-resultado-2').style.display = 'none';
}
