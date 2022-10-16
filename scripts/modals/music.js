// Modal musica inicio
let musicPlayerElement = null;

// Reference: https://developers.google.com/youtube/youtube_player_demo
// Reminder: No se pueden usar musica con copyright
const createMusicPlayerElement = () => {
  if (musicPlayerElement === null) {
    musicPlayerElement = document.createElement("iframe");
    musicPlayerElement.id = "musicPlayerIframe";
    musicPlayerElement.type = "text/html";
    musicPlayerElement.width = 720;
    musicPlayerElement.height = 405;
    musicPlayerElement.src =
      "https://www.youtube.com/embed/K4DyBUG242c?autoplay=0&controls=1&enablejsapi=1&fs=0&start=0&iv_load_policy=3";
    musicPlayerElement.frameBorder = 0;
    musicPlayerElement.allowFullscreen = true;

    let musicPlayerContainer = document.getElementById("musicPlayerContainer");
    if (musicPlayerContainer) {
      musicPlayerContainer.appendChild(musicPlayerElement);
    }
  }
};

const callPlayer = (frame_id, func, args) => {
  if (musicPlayerElement) {
    musicPlayerElement.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: func,
        args: args || [],
        id: frame_id,
      }),
      "*"
    );
  }
};

// Al cargar abro modal
windowElement.ready(() => {
  createMusicPlayerElement();

  $("#modalMusica").modal({
    backdrop: "static",
  });

  // Btn play music modal
  $("body").on("click", "#play-music-modal", function (e) {
    e.preventDefault();

    callPlayer("musicPlayerIframe", "setVolume", [80]); // Set the video volume to 80%
    $("#play-pause-music").attr("data-estado-music", "play");
    $("#play-pause-music").attr("data-anim-loop", "true");
    $("#play-pause-music").css("opacity", "1");
    callPlayer("musicPlayerIframe", "playVideo");

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
    $("#play-pause-music").attr("data-anim-loop", "true");
    $("#play-pause-music").css("opacity", "1");
    callPlayer("musicPlayerIframe", "playVideo");
  }

  // Play music
  if (estadoMusic == "play") {
    playPauseMusicElement.attr("data-estado-music", "pause");
    $("#play-pause-music").attr("data-anim-loop", "false");
    $("#play-pause-music").css("opacity", "0.5");
    callPlayer("musicPlayerIframe", "pauseVideo");
  }
};
