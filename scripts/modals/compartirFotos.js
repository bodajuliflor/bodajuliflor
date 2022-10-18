windowElement.ready(() => {
  // Abrir modal
  $("body").on("click", "a.modal-fotos", function (e) {
    e.preventDefault();

    $("#modalFotos").modal({
      backdrop: "static",
    });
  });
});
