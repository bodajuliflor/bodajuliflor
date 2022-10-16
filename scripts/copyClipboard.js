// Abrir modal
windowElement.ready(() => {
  $("body").on("click", "a.copyCBU", async function (e) {
    e.preventDefault();

    await navigator.clipboard.writeText(CBUvalue);

    alert("CBU copiado");
  });
});
