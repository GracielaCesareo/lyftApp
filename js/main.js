var cargarPagina = function() {
  $("#next").click(codigoRandom);
  $("#verify").click(codigoValido);
  $("#btn-code").click(nuevoCodigo);
}

var numeroAleatorio = localStorage.getItem("codigo");
  // console.log(numeroAleatorio);


//funcion para validar longitud el input de telefono
var longitudTel = function (e) {
  var telefono = $("#telefono").val().length;
  if (telefono == 10) {
    return true;
  }else {
    return false;
  }
}

//función para generar código aleatorio
var codigoRandom = function () {
  if(longitudTel()){
    var numero = Math.floor(Math.random() * 900) + 99;
    alert("LAB - " + numero);
    localStorage.setItem("codigo",numero);
  }else {
    swal("Ingresa un número valido");
  }
};

//funcion para validar codigo
var codigoValido = function() {
  var codigo = $("#primero").val();
  if (codigo == numeroAleatorio) {
    paginaDatos();
  } else {
    alert("Invalid code!")
  }
}

//funcion para cambiar de pagina
var paginaDatos = function() {
  location.href = "data-user.html";
}

//funcion para generar nuevo codigo
var nuevoCodigo = function (e) {
  e.preventDefault();
  var nuevoNumero = Math.floor(Math.random() * 900) + 99;
  alert("LAB - " + nuevoNumero);
  localStorage.setItem("codigo",nuevoNumero);
  numeroAleatorio = nuevoNumero;
}

$(document).ready(cargarPagina);
