
var filas = 7;
var columnas = 4;

var tabla = new Array(filas);
for (i = 0; i <= filas; i++) { tabla[i] = new Array(columnas); }

tabla[0][0] = "1"; tabla[0][1] = "Empanadas"; tabla[0][2] = "CARNE, POLLO O JAMON Y QUESO";
tabla[0][3] = "Una empanada es una fina masa de pan, masa quebrada u hojaldre rellena con una preparación salada o dul ce y " +
    "cocida al horno o frita. El relleno puede incluir carnes rojas o blancas, pescado, verduras o fruta.";


tabla[1][0] = "2"; tabla[1][1] = "Pan integral"; tabla[1][2] = "CON HARINA 0000000";
tabla[1][3] = "El pan integral, también conocido como pan moreno o pan marrón, está compuesto de harina no refinada (posee más salvado), " +
    "sal, agua y levadura activa. Se denomina integral al pan que posee una gran cantidad de fibra dietética.";


tabla[2][0] = "3"; tabla[2][1] = "Galletitas con chispas"; tabla[2][2] = "CON CHOCOLATE GAROTO";
tabla[2][3] = "Una galleta con chispas de chocolate es una galleta que se originó en los Estados Unidos con chispas de chocolate como ingrediente " +
    "distintivo. La receta tradicional combina una masa a base de mantequilla y azúcar moreno o blanco con chispas de chocolate semi-dulces.";


tabla[3][0] = "4"; tabla[3][1] = "Medialunas"; tabla[3][2] = "COMUNES O RELLENAS DE JAMON Y QUESO";
tabla[3][3] = "La medialuna es una pieza de bollería hojaldrada de origen austriaco, hecha con masa de hojaldre, levadura, mantequilla o grasa vacuna " +
    "(en ocasiones se sustituye por margarina). Las hay dulces o saladas.";


tabla[4][0] = "1"; tabla[4][1] = "Empanadas"; tabla[4][2] = "CARNE, POLLO O JAMON Y QUESO";
tabla[4][3] = "Una empanada es una fina masa de pan, masa quebrada u hojaldre rellena con una preparación salada o dulce y " +
    "cocida al horno o frita. El relleno puede incluir carnes rojas o blancas, pescado, verduras o fruta.";


tabla[5][0] = "2"; tabla[5][1] = "Pan integral"; tabla[5][2] = "CON HARINA 0000000";
tabla[5][3] = "El pan integral, también conocido como pan moreno o pan marrón, está compuesto de harina no refinada (posee más salvado), " +
    "sal, agua y levadura activa. Se denomina integral al pan que posee una gran cantidad de fibra dietética.";


tabla[6][0] = "3"; tabla[6][1] = "Galletitas con chispas"; tabla[6][2] = "CON CHOCOLATE GAROTO";
tabla[6][3] = "Una galleta con chispas de chocolate es una galleta que se originó en los Estados Unidos con chispas de chocolate como ingrediente " +
    "distintivo. La receta tradicional combina una masa a base de mantequilla y azúcar moreno o blanco con chispas de chocolate semi-dulces.";


tabla[7][0] = "4"; tabla[7][1] = "Medialunas"; tabla[7][2] = "COMUNES O RELLENAS DE JAMON Y QUESO";
tabla[7][3] = "La medialuna es una pieza de bollería hojaldrada de origen austriaco, hecha con masa de hojaldre, levadura, mantequilla o grasa vacuna " +
    "(en ocasiones se sustituye por margarina). Las hay dulces o saladas.";





/*
console.log(tabla[0][0] + "     " + tabla[0][1]  + "     " + tabla[0][2]  + "     " + tabla[0][3] );  
console.log(tabla[1][0] + "     " + tabla[1][1]  + "     " + tabla[1][2]  + "     " + tabla[1][3] );  
console.log(tabla[2][0] + "     " + tabla[2][1]  + "     " + tabla[2][2]  + "     " + tabla[2][3] );  
console.log(tabla[3][0] + "     " + tabla[3][1]  + "     " + tabla[3][2]  + "     " + tabla[3][3] );  
console.log(tabla[4][0] + "     " + tabla[4][1]  + "     " + tabla[4][2]  + "     " + tabla[4][3] );  
*/

var id = "";
var nombre = "";
var predesc = "";
var desc = "";

function cargarProductos() {

    for (var i = 0; i < tabla.length; i++) {
        // console.log(i + " " + tabla[i][1]);
        id = tabla[i][0];
        nombre = tabla[i][1];
        predesc = tabla[i][2];
        desc = tabla[i][3];
        console.log("------------------------");
        console.log("id: " + id);
        console.log("nombre: " + nombre);
        console.log("predesc: " + predesc);
        console.log("desc: " + desc);
        console.log("------------------------");

        nuevoProducto(id, nombre, predesc);
    }
}

function nuevoProducto(id, nombre, predesc) {
    var prod = "<div class='prod col-md-3' id='" + id + "'>" +
        "<img src='img/" + id + ".jpg' class='img-responsive img-rounded producto empanada' alt='Responsive image' data-target='.bs-example-modal-lg' data-toggle='modal' onclick='prodModal(" + id + ")'>" +
        "<h4>" + nombre + "</h4><br>" +
        "<h6>" + predesc + "</h6>" +
        "<button type='button' class='btn btn-primary btn-block' onclick='tocame()'>Comprar</button>" +
        "</div>"

    $(".producteitors").append(prod);
}



function prodModal(id) {

        nombre = tabla[id-1][1];
        predesc = tabla[id-1][2];
        desc = tabla[id-1][3];

  $(".imagen").css("background-image","url(img/" + id + ".jpg)");
  $(".tituloProd").text(nombre);
  $(".predescrip").text(predesc);
  $(".descrip").text(desc);
  
  
//$(".productoModal").html(mod);

}


function dadoEnClasse(){
var menor = 0;
var mayor = 0;
var nombreMenor = "";
var nombreMayor = "";

var personas = [
     personaA={
        nombre:"Miguel",
        apellido:"Merelli",
        nota:"6",
        edad:"20",
        altura:"175",
        peso:70,
        nombreCompleto: function(){return(this.nombre + " " + this.apellido);}
    }
,
      personaB={
        nombre:"Franco",
        apellido:"Rodrioguez",
        nota:"4",
        edad:"19",
        altura:"160",
        peso:55,
        nombreCompleto: function(){return(this.nombre + " " + this.apellido);}
    }
];
    for (var i = 0; i < personas.length; i++){
        if (personas[i].nota < 6){
            alert(personas[i].nombre + " Debe estudiar más");
        }else{
            alert(personas[i].nombre + " Debe estudiar menos");
        }

        if (personas[i].edad < menor){
            menor = personas[i].edad;
            nombreMenor=personas[i].nombre;
        }
        if (personas[i].edad > mayor){
            mayor = personas[i].edad;
            nombreMayor=personas[i].nombre;
        }

      



    }
      alert("El de menor edad: " + nombreMenor);
      alert("El de mayor edad: " + nombreMayor);
}

