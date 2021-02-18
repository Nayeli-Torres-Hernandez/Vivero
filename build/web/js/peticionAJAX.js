//Javascript es un lenguaje de programación o de secuencias de comandos que te 
//permite implementar funciones complejas en páginas web
//comenzamos con una función para poder hacer nuestra petición AJAX
function cargarPlantasInterior() {
    //abrimos la petición AJAX para cargar (el html destinado)
    $.ajax({
        //colocamos la URL de nuestro archivo HTML
        url: "plantasInterior.html",
        context: document.body
    }).done(function (data) {
        //Aquí le decimos que hacer con la respuesta que obtenga el servidor
        $("#divContenedorTODO").html(data);
        $("#divInicioLogo").html("");
        $("#divQuienesSomos").html("");
    });
}


//Javascript es un lenguaje de programación o de secuencias de comandos que te 
//permite implementar funciones complejas en páginas web
//comenzamos con una función para poder hacer nuestra petición AJAX
function cargarPlantasExterior() {
    //abrimos la petición AJAX para cargar (el html destinado)
    $.ajax({
        //colocamos la URL de nuestro archivo HTML
        url: "plantasExterior.html",
        context: document.body
    }).done(function (data) {
        //Aquí le decimos que hacer con la respuesta que obtenga el servidor
        $("#divContenedorTODO").html(data);
        $("#divInicioLogo").html("");
        $("#divQuienesSomos").html("");
    });
}

function cargarQuienesSomos() {
    //abrimos la petición AJAX para cargar (el html destinado)
    $.ajax({
        //colocamos la URL de nuestro archivo HTML
        url: "quienessomos.html",
        context: document.body
    }).done(function (data) {
        //Aquí le decimos que hacer con la respuesta que obtenga el servidor
        $("#divContenedorTODO").html("");
        $("#divInicioLogo").html("");
        $("#divQuienesSomos").html(data);
    });
}

function cargarContactanos() {
    //abrimos la petición AJAX para cargar (el html destinado)
    $.ajax({
        //colocamos la URL de nuestro archivo HTML
        url: "contactanos.html",
        context: document.body
    }).done(function (data) {
        //Aquí le decimos que hacer con la respuesta que obtenga el servidor
        $("#divContenedorTODO").html(data);
        $("#divInicioLogo").html("");
        $("#divQuienesSomos").html("");
    });
}

function cargarHome() {
    //abrimos la petición AJAX para cargar (el html destinado)
    $.ajax({
        //colocamos la URL de nuestro archivo HTML
        url: "plantasExterior.html",
        context: document.body
    }).done(function (data) {
        //Aquí le decimos que hacer con la respuesta que obtenga el servidor
        $("#divContenedorTODO").html(data);
        $("#divInicioLogo").html("");
        $("#divQuienesSomos").html("");
    });
}

function enviarCorreo() {
    $.ajax({

        //colocamos la URL de nuestro archivo HTML
        url: "contactanos.html",
        context: document.body
    }).done(function (data) {
        //Aquí le decimos que hacer con la respuesta que obtenga el servidor
        //alert("Correo Enviado");
        //Swal.fire("Enviado",
        //          "Correo Enviado",
        //        "success");        
    });
}
function limpiarCamposFormulario()
{
    $("#txtCorreo").val("");
    $("#txtNombre").val("");
    $("#txtTel").val("");
    $("#txtMotivo").val("");
    $("#txtAsunto").val("");
    $("#gridCheck").prop("checked", false);
}