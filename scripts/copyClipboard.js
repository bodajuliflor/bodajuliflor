// Abrir modal
windowElement.ready(() => {
  $("body").on("click", "a.copyCBU", async function (e) {
    e.preventDefault();

    await navigator.clipboard.writeText(CBUvalue);

    alert("CBU copiado");
  });

  $("body").on("click", "a.copyAlbumCode", async function (e) {
    e.preventDefault();

    await navigator.clipboard.writeText(albumCode);

    alert("Código de álbum copiado");
  });
});
