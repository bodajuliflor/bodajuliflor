// Al cargar abro modal
windowElement.ready(() => {
  $("#modalMusica").modal({
    backdrop: "static",
  });

  // Btn play music modal
  $("body").on("click", "#play-music-modal", function (e) {
    e.preventDefault();

    player.setVolume(80);
    $("#play-pause-music").attr("data-estado-music", "play");
    $("#play-pause-music").css("opacity", "1");
    player.playVideo();
    alert("Iniciar musica");

    $("#modalMusica").modal("hide");
  });

  // Btn stop music modal
  $("body").on("click", "#stop-music-modal", function (e) {
    e.preventDefault();

    $("#play-pause-music").attr("data-anim-loop", "false");
    $("#play-pause-music").css("opacity", "0.5");
  });
});

const playPauseMusic = () => {
  let playPauseMusicElement = $("#play-pause-music");

  // Estado actual
  let estadoMusic = playPauseMusicElement.attr("data-estado-music");

  // Pause music
  if (estadoMusic == "pause") {
    playPauseMusicElement.attr("data-estado-music", "play");
    $("#play-pause-music").css("opacity", "1");
    player.playVideo();
    alert("Iniciar musica");
  }

  // Play music
  if (estadoMusic == "play") {
    playPauseMusicElement.attr("data-estado-music", "pause");
    $("#play-pause-music").css("opacity", "0.5");
    player.pauseVideo();
    alert("Pausar musica");
  }
};
