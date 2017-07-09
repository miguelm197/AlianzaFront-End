$(document).ready(function() {
	$("#check").hide();
	console.log("Estoy pronto");
});

function completarNombre(){

	var nombre = document.getElementById("inputName").value;
	//var nombre = $("inputName").val();    // también puede ser asì
	console.log(nombre);
	$('a#name').text(nombre);
	$('title').text(nombre);
}


function completarPass(){

	var clave1 = $("#inputPass1").val();
	var clave2 = $("#inputPass2").val();
	console.log(clave1);
	console.log(clave2);

	if (clave1 != clave2) {
		$("#check").hide();
		alert("Las contraseñas no coinciden");
	}else{
		$("#check").show();

		//alert("Bienvenido");
	}

}


function borraPass2(){

	$("#inputPass2").val()="";

}


function cambiaImg(){


	var tipofoto = 	$("#foto").attr("src");
	console.log(tipofoto);

	if (tipofoto="imagenes/prende.jpg"){
		$("#foto").attr("src","imagenes/apaga.jpg");
	}else{
		$("#foto").attr("src","imagenes/prende.jpg");
	}

}
