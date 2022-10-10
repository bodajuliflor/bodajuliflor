// // Validacion de form.
// function isOkSugerirCancion() {
//   // Remuevo mensajes de error anteriores
//   $("#error-form").remove();

//   // Variables necesarias para la validacion
//   var flag = true;
//   var err = "";

//   // Variables del form para validar.
//   var sugerenciaName = $.trim($("#nombreSugerencia").val());
//   var sugerenciaDescription = $.trim($("#descripcionSugerencia").val());
//   var sugerenciaLink = $.trim($("#linkSugerencia").val());

//   // Descripcion
//   if (sugerenciaDescription == "") {
//     flag = false;
//     err = lang_cancionRequerida;
//   } else {
//     if (sugerenciaDescription.length > 50) {
//       flag = false;
//       err = lang_caracteresCancionSugerencia;
//     }
//   }

//   // Link
//   if (sugerenciaLink != "") {
//     if (!is_url(sugerenciaLink)) {
//       flag = false;
//       err = lang_linkIncorrecto;
//     }
//     if (sugerenciaLink.length > 250) {
//       flag = false;
//       err = lang_caracteresLinkSugerencia;
//     }
//   }

//   // Nombre
//   if (sugerenciaName == "") {
//     flag = false;
//     err = lang_nombreRequerido;
//   } else {
//     if (sugerenciaName.length > 20) {
//       flag = false;
//       err = lang_caracteresNombreSugerencia;
//     }
//   }

//   // Si hay error
//   if (flag === false) {
//     // Imprimo el error
//     $("#formSugerirCancion").after('<span id="error-form">' + err + "</span>");
//   }
//   // Retorno el estado de la validacion
//   return flag;
// }

// setTimeout(() => {
//   // Abrir modal
//   $("body").on("click", "a.sugerir-cancion", function (e) {
//     e.preventDefault();

//     // Remuevo mensajes de error anteriores
//     $("#error-form").remove();

//     $("#modalSugerirCancion").modal({
//       backdrop: "static",
//     });
//   });

//   // Enviar sugerencia
//   $("body").on("click", "#sendSugerenciaCancion", function (e) {
//     e.preventDefault();

//     if (isOkSugerirCancion()) {
//       //Form bien validado
//       // Load and disabled buttom.
//       $("#sendSugerenciaCancion").text(lang_enviandoSugerencia + "...");
//       $("#sendSugerenciaCancion").prop("disabled", true);

//       // Obtengo el Form.
//       var formulario = $("#formSugerirCancion")[0];

//       // Obtengo los datos del formulario
//       var datos = new FormData(formulario);

//       // Visualizar como viajan los datos
//       for (var pair of datos.entries()) {
//         console.log(pair[0] + ", " + pair[1]);
//       }

//       //   // Envio con fetch los datos mediante POST
//       //   fetch(_pathApp + "producto/fetchs/sugerir-cancion.php", {
//       //       method: "POST",
//       //       body: datos
//       //     })
//       //     // Promesas fetch
//       //     .then(res => res.json())
//       //     .then(data => {

//       //       // Si recibo error
//       //       if (data.error === true) {

//       //         $("#sendSugerenciaCancion").text(lang_sugerirCancion);
//       //         $("#sendSugerenciaCancion").prop("disabled", false);

//       //         // Imprimo el error
//       //         $('#formSugerirCancion').after('<span id="error-form">' + data.desc + '</span>');
//       //       }

//       //       // Si no hay error
//       //       if (data.error === false) {

//       //         $("#sendSugerenciaCancion").text(lang_sugerirCancion);
//       //         $("#sendSugerenciaCancion").prop("disabled", false);

//       //         // Oculto elementos del form y reseteo
//       //         $('#formSugerirCancion')[0].reset();
//       //         $('#modalSugerirCancion .formulario-content, #modalSugerirCancion .modal-footer, #modalSugerirCancion h5').hide();

//       //         // Acomodo el css para centrar mensaje
//       //         $('#modalSugerirCancion .modal-body').addClass('fix-height');

//       //         // Muestro mensaje de exito
//       //         $('#modalSugerirCancion .msj-content').html(
//       //           "<h5>" + lang_sugerirCancionMsjExito_1 + "</h5><p>" + lang_sugerirCancionMsjExito_2 + "</p>"
//       //         ).show();

//       //         // Cierro modal y vuelvo a activar form
//       //         setTimeout(function() {

//       //           $('#modalSugerirCancion').modal('hide');
//       //           $('#modalSugerirCancion .formulario-content, #modalSugerirCancion .modal-footer, #modalSugerirCancion h5').show();
//       //           $('#modalSugerirCancion .msj-content').html('').hide();
//       //           $('#modalSugerirCancion .modal-body').removeClass('fix-height');

//       //         }, 4000);
//       //       }
//       //     });
//     }
//   });
// }, 1000);
