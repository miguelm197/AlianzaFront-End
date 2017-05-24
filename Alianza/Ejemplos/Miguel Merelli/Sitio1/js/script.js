function ejercicio1() {
    //TODOS LOS MULTIPLOS DE N QUE ESTËN ENTRE A Y B
    console.log("\n\n\n\n >>> TODOS LOS MULTIPLOS DE N QUE ESTËN ENTRE A Y B <<<")

    do {
        var a = prompt('Ingrese el número A del 1 al 1000:', ''); //Pide ingresar un valor desde el navegador y lo guarda en a
    } while (isNaN(a) || a < 1 || a > 1000);   // isNaN(a) es true cuando a no es un número 



    do {                                                                //Cada uno de estos bloques pide que se ingrese un valor
        var b = prompt('Ingrese el número B del 1 al 1000:', '');       //y verifica que cada valor sea un número entre 1 y 1000
    } while (isNaN(b) || b < 1 || b > 1000);                            //



    do {
        var n = prompt('Ingrese el número N del 1 al 1000:', '');
    } while (isNaN(n) || n < 1 || n > 1000);


    var resultado = "";


    //Se recorre desde el punto a al punto b
    for (i = a; i <= b; i++) {
        if (i % n == 0) {
            resultado = resultado + " " + i
        }
    }

    // Verifica si resultado es vacio (no hay número que sean multiplos) guarda en la variable resultado que no existen multiplos
    if (resultado == "") {
        resultado = "No existe ningún multiplo de " + n + " entre el " + a + " y el " + b;
    } else {
        resultado = "Los números multiplos de " + n + ": " + resultado;
    }

    console.log(resultado);
    $("#ventana").text(resultado);     // JQuery Inserta resultado en la div con id "#ventana"

    //$("#id").text("Hola Mundo"); 
    //Escribe "Hola Mundo" dentro del elemento con la id "#id"
}











function ejercicio2() {
    //MAYOR Y MENOR
    console.log("\n\n\n\n >>> MAYOR Y MENOR <<<")


    var mayor = -9999999999999999999999;
    var menor = 99999999999999999999999;


    do {                                                                    //Pide que se ingrese un valor
        var n = prompt('Ingrese un número del 1 al 1000:', '');             //y verifica que cada valor sea un número entre 1 y 1000
    } while (isNaN(n) || n < 1 || n > 1000);                                //de lo contrario se volverá a pedir


    //Itera tantas veces como el número que se ingresó
    for (i = 1; i <= n; i++) {


        do {
            var v = prompt("Ingrese el número " + i + ": ", "");
        } while (v == "" || v < -99999999999999999999999 || v > 99999999999999999999999);


        if (v > mayor) {
            mayor = v;
        }

        if (v < menor) {
            menor = v;
        }


    }

    var resultado = "mayor: " + mayor + " - menor: " + menor;   //Declara y setea la cadena de texto en la variable "resultado"

    console.log(resultado);         //Muestra por consola del navegador el resultado
    $("#ventana").text(resultado);  // JQuery  Inserta el resultado dentro de una div con id "#ventana"

    //$("#id").text("Hola Mundo"); 
    //Escribe "Hola Mundo" dentro del elemento con la id "#id"
}









function ejercicio3() {
    // GRAFICA
    console.log("\n\n\n\n >>> GRAFICA <<<");

    var contador = 1;
    var resultado = "";

    //Itera 5 veces
    for (i = 1; i <= 5; i++) {
        var n = prompt(contador + " Ingrese el número positivo menor a 60: ", "");
        contador++;

        if (n > 60) {
            n = 60;
        }

        //Se coloca el numero de linea y un espacio
        resultado = resultado + "\n" + (contador - 1) + "  ";   //  \n es un salto de linea, lo que esta a la derecha del \n se coloca un regnlón abajo

        //Se coloca la cantidad de asteriscos como el número indique
        for (j = 1; j <= n; j++) {
            resultado = resultado + "*";
        }
    }
    console.log(resultado);
    alert(resultado);
}



function ejercicio4() {
    //APROBADO / NO APROBADO
    console.log("\n\n\n\n >>> APROBADO / NO APROBADO <<<");

    var entrada = [1, 2, 3, 4, 5, 6, 7, 8];

    for (var i = 0; i < entrada.length; i++) {
        if (entrada[i] > 5) {
            alert(entrada[i] + " - Aprobado");
            console.log(entrada[i] + " - Aprobado");
        } else {
            alert(entrada[i] + " - No aprobado");
            console.log(entrada[i] + " - No aprobado");
        }
    }

}




function ejercicio5(inicio, fin) {
    // TABLAS
    console.log("\n\n\n\n >>> TABLAS <<<");
    var resultado = "";

    for (i = inicio; i <= fin; i++) {
        resultado = resultado + "\n\n\nTABLA DEL " + i;
        for (j = 0; j <= 10; j++) {
            resultado = resultado + "\n" + i + "*" + j + "=" + (i * j);
        }
    }

    console.log(resultado);
    alert(resultado);
}






function ejercicio6() {

    //EJEMPLO DE SWITCH
    console.log("\n\n\n\n >>> SWITCH <<<");

    var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    var verificador = false;
    var indice;

    do {
        var dia = prompt('Ingrese un día de la semana: ', '');

        //***** OPCION 1 *****
        /*
        for (var i = 0; i < semana.length; i++) {
            if (dia == semana[i]  ||  dia == "") {
                verificador = true;
                break;
            }
        }*/

        //***** OPCION 2 ******
        /*
        var contador = 0;
        while (contador < semana.length && !verificador){
            if (dia == semana[contador] || dia == ""){
                verificador = true;
            }
            contador = contador + 1;
        }
        */

        //***** OPCION 3 ******

        if ((semana.indexOf(dia) != -1) || dia == "") {
            verificador = true;
            indice = semana.indexOf(dia);
        }


        if (verificador) {
            var resultado = "";
            switch (dia) {
                case "Lunes": resultado = "Día Lunes"; break;
                case "Martes": resultado = "Día Martes"; break;
                case "Miércoles": resultado = "Día Miércoles"; break;
                case "Miercoles": resultado = "Día Miércoles"; break;
                case "Jueves": resultado = "Día Jueves"; break;
                case "Viernes": resultado = "Día Viernes"; break;
                case "Sábado": resultado = "Día Sábado"; break;
                case "Sabado": resultado = "Día Sábado"; break;
                case "Domingo": resultado = "Día Domingo"; break;
                case "": resultado = "No ha ingresado ningún dato"; break;
            }


            //Convierte a los de indice par en minuscula e impar en mayusculas
            if (indice % 2 == 0) {
                resultado = resultado.toLowerCase();
            } else {
                resultado = resultado.toUpperCase();
            }


        } else {
            resultado = "El valor ingresado no es correcto";
        }
        alert(resultado);
        console.log("Resultado: " + resultado);

    } while (!verificador);

}


function ejercicio7() {
    //COMIDA RAPIDA

    do {
        var v = prompt("Comandos: \n\nAgua $40  \nJugo $50 \nPapas $40    \nAros de Cebolla $50 \n Hamburguesa $110 \n\nSalir \n\n\nIngrese el pedido: ", "");
        alert(v);
    } while (v != "Salir");




}


function ejercicio8() {
    //HASHTAG
    var linea = "Estos son todos los hashtag:<Hola>y<Mundo>y<Chau>";

    var a = linea.indexOf("<");
    var b = linea.indexOf(">");
    var c = linea.lastIndexOf("<");
    var d = linea.lastIndexOf(">");


    var nuevaLinea = linea.substring(a, d + 1);

    var lineafin = "";
    var e;
    var separadorY = nuevaLinea.split("y");

    for (var i = 0; i < separadorY.length; i++) {
        e = separadorY[i].indexOf(">");
        //alert("palabra " + separadorY[i].substring(1, e));
        lineafin = lineafin + separadorY[i].substring(1, e) + " ";
    }
    alert("Linea: '" + linea + "'" + "\nNuevaLinea: '" + lineafin + "'");
}



function ejercicio9() {
    //HASHTAG 2

    var linea = linea = "#Este# conjunto caracteres tiene un mensaje oculto, que #si se ve# desde cierta perspectiva podrá ver el #mensaje oculto#"
    var array = linea.split("#");
    var linea2="";

    for (var i=1; i<array.length-1; i++){

        if (i%2 != 0){
            linea2=linea2 + array[i] + " ";
        }
    }
      alert("Linea: " + linea + "\n Linea2: " + linea2);
}




function ejercicio10() {
    //HASHTAG 3
    var linea = "Estos son todos los hashtag:<Hola>yrtasfask<fasifuahsifu h <sape>sadasfas   <Mundo>ytttttttttttttt<Chau>";
    var palabra="";
    var separador2 = linea.split(">");
    var lineaFinal = "";

    for (var i = 0; i < separador2.length; i++) {
       var a = separador2[i].indexOf("<") + 1;
       var b = separador2[i].length;
       palabra = separador2[i].substring(a,b);
       lineaFinal=lineaFinal + palabra + " ";
    }
    alert(lineaFinal);
}



//<hola>xy<<mundo>xy><rtx<chau>0