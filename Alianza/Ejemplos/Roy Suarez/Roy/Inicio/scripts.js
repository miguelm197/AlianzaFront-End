$( document ).ready(function() {
    $("#magia").show();
    $("#pronto").hide();
    console.log("tamo ahi");
});


function mostrar(){
    $("#magia").hide();
    $("#pronto").show();
    var name = $("#name").val();
    return name
}

