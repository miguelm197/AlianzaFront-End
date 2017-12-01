$( document ).ready(function() {
    $("#check").hide();
    $("#cross").hide();
    console.log("tamo ahi");
});

  function NombreIngresado(){
    var name = document.getElementById("nameishere").value;
    console.log(name);
    $('#name').text(name);
    $('title').text(name);
  }
  function verificarContrasena(){
      var pass1 = $("#pass1").val();
      var pass2 = $("#pass2").val();
      console.log("pass1---->" + pass1)
      console.log("pass2---->" + pass2)
      if(pass1 == pass2){
        console.log("success");
        $("#check").show();
        $("#cross").hide();
      }else{
        alert("Las contraseñas no coinciden");
        $("#check").hide();
        $("#cross").show();
      }
  }
  function asegurarViveza(){
      var pass1 = $("#pass1").val();
      var pass2 = $("#pass2").val();
      if (pass2 != ""){
        if(pass1 == pass2){
          console.log("success2");
          $("#check").show();
          $("#cross").hide();
        }else{
          alert("Las contraseñas no coinciden");
          $("#check").hide();
          $("#cross").show();
        }
      }
  }
   function cambioFoto(){
     $("#foto1").attr("src", "Dead2.jpg");
     $("#foto1").attr("id", "foto2");
   }
   function cambioFoto2(){
     $("#foto2").attr("src", "Dead1.jpg");
   }
