// Abrir modal
windowElement.ready(() => {
    $("body").on("click", "a.copyCBU", function (e) {
        e.preventDefault();
        
        navigator.clipboard.writeText(CBUvalue);

        alert("CBU copiado");
    });
});
