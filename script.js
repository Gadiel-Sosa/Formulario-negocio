$("#subm").click(function () {
  if ($("#nombre").val().trim() == "") {
    alert("Escribe tu nombre");
    $("#nombre").focus();
    return false;
  }

  if ($("#apellido").val().trim() == "") {
    alert("Escribe tus apellidos");
    $("#apellido").focus();
    return false;
  }

  let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!expresionCorreo.test($("#email").val().trim())) {
    alert("Escribe un email válido");
    $("#email").focus();
    return false;
  }

  let expresionTelefono = /^\d{10}$/;
  if (!expresionTelefono.test($("#telefono").val().trim())) {
  alert("Escribe un número de teléfono válido");
  $("#telefono").focus();
  return false;
}

if ($("#industrias").val() == ''){
  alert("Debes seleccionar una industria");
  $("#industrias").focus();
  return false;
}

// if ($("#web").val().trim() == "") {
//     alert("Escibe la web");
//     $("#web").focus();
//     return false;
//   }




  $("#form").submit();
});
