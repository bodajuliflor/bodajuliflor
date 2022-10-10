windowElement.ready(() => {
  // Abrir modal
  $("body").on("click", "a.modal-vestuario", function (e) {
    e.preventDefault();

    $("#modalVestuario").modal({
      backdrop: "static",
    });
  });
});
