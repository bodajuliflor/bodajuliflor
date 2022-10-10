// Abrir modal
windowElement.ready(() => {
  $("body").on("click", "a.modal-como-llegar", function (e) {
    e.preventDefault();

    var evento = $(this).attr("data-evento");

    let titleModalMapa = "";
    let urlMap = "";

    let mapElement = document.getElementById("googleMapIframe");

    if (mapElement === null) {
      // Genero el elemento que contiene el mapa
      mapElement = document.createElement("iframe");
      mapElement.id = "googleMapIframe";
      mapElement.width = 600;
      mapElement.height = 450;
      mapElement.style.border = 0;
      mapElement.allowFullscreen = "";
      mapElement.loading = "lazy";
      mapElement.referrerPolicy = "no-referrer-when-downgrade";
    }

    if (evento == "Fiesta") {
      titleModalMapa = lang_titleModalMapaFiesta;
      urlMap = urlCeremoniaFiesta;
      mapElement.src = embeddedUrlCeremoniaFiesta;
    }

    if (evento == "Ceremonia") {
      titleModalMapa = lang_titleModalMapaCeremonia;
      urlMap = urlCeremoniaFiesta; // TODO: Change this
      mapElement.src = embeddedUrlCivil; // TODO: Change this
    }

    $("#googleMap").append(mapElement);

    // Cambio titulo
    $("#modalMapa .modal-title").text(titleModalMapa);

    // Genero el link para ampliar mapa
    $(".ampliar-mapa").attr("href", urlCeremoniaFiesta);

    $("#modalMapa").modal({
      backdrop: "static",
    });
  });
});
