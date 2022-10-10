// // Validacion de form
// function isOkAsistencia() {
//   // Remuevo mensajes de error anteriores
//   $("#error-form").remove();

//   // Variables necesarias para la validacion
//   var flag = true;
//   var err = "";

//   // Variables del form para validar.
//   var asistenteName = $.trim($("#nombreAsistente").val());
//   var asistenteComentarios = $.trim($("#comentariosAsistente").val());

//   // Nombre
//   if (asistenteName == "") {
//     flag = false;
//     err = lang_nombreRequerido;
//   } else {
//     if (asistenteName.length > 20) {
//       flag = false;
//       err = lang_caracteresNombreAsistencia;
//     }
//   }

//   // Comentarios
//   if (asistenteComentarios != "") {
//     if (asistenteComentarios.length > 100) {
//       flag = false;
//       err = lang_caracteresComentariosAsistencia;
//     }
//   }

//   // Si hay error
//   if (flag === false) {
//     // Imprimo el error
//     $("#formAsistencia").after('<span id="error-form">' + err + "</span>");
//   }

//   // Retorno el estado de la validacion
//   return flag;
// }

// setTimeout(() => {
//   // Abrir modal
//   $("body").on("click", "a.confirmar-asistencia", function (e) {
//     e.preventDefault();

//     // Remuevo mensajes de error anteriores
//     $("#error-form").remove();

//     var evento = $(this).attr("data-evento");

//     $("#eventoAsistencia").val(evento);

//     if (evento == "Fiesta") {
//       var titleModalAsistencia = lang_titleModalAsistenciaFiesta;
//       var rutaImgModalAsistencia = "./assets/images/img_circuloFiesta.svg";
//     }

//     if (evento == "Ceremonia") {
//       var titleModalAsistencia = lang_titleModalAsistenciaCeremonia;
//       var rutaImgModalAsistencia = "./assets/images/img_circuloCeremonia.svg";
//     }

//     $("#modalAsistencia .modal-title").text(titleModalAsistencia);
//     $("#modalAsistencia .img-top-modal img").attr(
//       "src",
//       rutaImgModalAsistencia
//     );

//     $("#modalAsistencia").modal({
//       backdrop: "static",
//     });
//   });

//   // Enviar asistencia
//   $("body").on("click", "#sendAsistencia", function (e) {
//     e.preventDefault();

//     if (isOkAsistencia()) {
//       //Form bien validado
//       // Load and disabled buttom.
//       $("#sendAsistencia").text(lang_informandoAsistencia + "...");
//       $("#sendAsistencia").prop("disabled", true);

//       // Obtengo el Form.
//       var formulario = $("#formAsistencia")[0];

//       // Obtengo los datos del formulario
//       var datos = new FormData(formulario);

//       // Visualizar como viajan los datos
//       for (var pair of datos.entries()) {
//         console.log(pair[0] + ", " + pair[1]);
//       }

//       // Envio con fetch los datos mediante POST
//       // fetch(_pathApp + "producto/fetchs/confirmar-asistencia.php", {
//       //   method: "POST",
//       //   body: datos,
//       // })
//       //   // Promesas fetch
//       //   .then((res) => res.json())
//       //   .then((data) => {
//       //     // Si recibo error
//       //     if (data.error === true) {
//       //       $("#sendAsistencia").text(lang_confirmarAsistencia);
//       //       $("#sendAsistencia").prop("disabled", false);

//       //       // Imprimo el error
//       //       $("#formAsistencia").after(
//       //         '<span id="error-form">' + data.desc + "</span>"
//       //       );
//       //     }

//       //     // Si no hay error
//       //     if (data.error === false) {
//       //       $("#sendAsistencia").text(lang_confirmarAsistencia);
//       //       $("#sendAsistencia").prop("disabled", false);

//       //       // Oculto elementos del form y reseteo
//       //       $("#formAsistencia")[0].reset();
//       //       $(
//       //         "#modalAsistencia .formulario-content, #modalAsistencia .modal-footer, #modalAsistencia h5"
//       //       ).hide();

//       //       // Acomodo el css para centrar mensaje
//       //       $("#modalAsistencia .modal-body").addClass("fix-height");

//       //       // Muestro mensaje de exito
//       //       $("#modalAsistencia .msj-content")
//       //         .html(
//       //           "<h5>" +
//       //             lang_asistenciaMsjExito_1 +
//       //             "</h5><p>" +
//       //             lang_asistenciaMsjExito_2 +
//       //             "</p>"
//       //         )
//       //         .show();

//       //       // Cierro modal y vuelvo a activar form
//       //       setTimeout(function () {
//       //         $("#modalAsistencia").modal("hide");
//       //         $(
//       //           "#modalAsistencia .formulario-content, #modalAsistencia .modal-footer, #modalAsistencia h5"
//       //         ).show();
//       //         $("#modalAsistencia .msj-content").html("").hide();
//       //         $("#modalAsistencia .modal-body").removeClass("fix-height");
//       //       }, 4000);
//       //     }
//       //   });
//     }
//   });
// }, 1000);
