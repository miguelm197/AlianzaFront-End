
function mostrar(){






    var entrada = prompt("Ingrese valor");
    console.log(entrada);

}

function cuentaLetras(){

var diaSem = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

var cletras = "abcdefghijklmnopqrstuvwxyz";
var cantLetras = [];
var cantVocal = 0;
var cantConso = 0;
var cantNro = 0;

for (var k=0; k < cletras.length; k++){
    cantLetras[cletras[k]]=0;
}


for (var iele=0; iele < diaSem.length; iele++){

    for (var istr=0; istr < diaSem[iele].length; istr++){

        console.log(cletras[istr]);
        //console.log(diaSem[iele][istr]);
        cantLetras[diaSem[iele][istr]]++;

        if ((diaSem[iele][istr] == "a") || (diaSem[iele][istr] =="e") || (diaSem[iele][istr] == "i") || (diaSem[iele][istr] =="o") || (diaSem[iele][istr] =="u")){
            cantVocal++;
        }else if (diaSem[iele][istr] == ("1" || "2"|| "3"|| "4"|| "5"|| "6"|| "7"|| "8"|| "9"|| "0")) {
            cantNro++;
        }else{
            cantConso++;
        }

    }

}
        console.log(cantLetras);
        console.log(cantVocal);
        console.log(cantConso);
        console.log(cantNro);

}

