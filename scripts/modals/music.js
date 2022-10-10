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
    callPlayer("musicPlayerIframe", "playVideo");

    $("#modalMusica").modal("hide");
  });
});

const playPauseMusic = () => {
  let playPauseMusicElement = $("#play-pause-music");

  // Estado actual
  let estadoMusic = playPauseMusicElement.attr("data-estado-music");

  // Pause music
  if (estadoMusic == "pause") {
    playPauseMusicElement.attr("data-estado-music", "play");
    callPlayer("musicPlayerIframe", "playVideo");
  }

  // Play music
  if (estadoMusic == "play") {
    playPauseMusicElement.attr("data-estado-music", "pause");
    callPlayer("musicPlayerIframe", "pauseVideo");
  }
};

// Musica de fondo
// const loadPlayer = () => {
//   function onYouTubeIframeAPIReady() {
//     player = new YT.Player("player-musica-fondo", {
//       height: "10",
//       width: "10",
//       playerVars: {
//         playlist: "EH30RAXnRWs",
//         loop: 1,
//       },
//       events: {
//         onReady: onPlayerReady,
//       },
//     });
//   }

//   // 4. The API will call this function when the video player is ready.
//   function onPlayerReady(event) {
//     event.target.setVolume(80);
//     //event.target.playVideo();
//   }

//   // Click en controlador musica
//   $("body").on("click", "#play-pause-music", function (e) {
//     e.preventDefault();

//     // Estado actual
//     let estadoMusic = $(this).attr("data-estado-music");

//     // Pause music
//     if (estadoMusic == "pause") {
//       $(this).attr("data-estado-music", "play");
//       //animMusicAnimIcon.play();
//       //player.playVideo();
//     }

//     // Play music
//     if (estadoMusic == "play") {
//       $(this).attr("data-estado-music", "pause");
//       //player.pauseVideo();
//       //animMusicAnimIcon.stop();
//     }
//   });

//   window.onYouTubePlayerAPIReady = function () {
//     onYouTubeIframeAPIReady();
//   };
// };

// // Load the IFrame Player API code asynchronously.
// const loadScript = (callback) => {
//   if (typeof YT == "undefined" || typeof YT.Player == "undefined") {
//     let tag = document.createElement("script");

//     // This function creates an <iframe> (and YouTube player)
//     // after the API code downloads.
//     tag.src = "https://www.youtube.com/iframe_api";
//     let firstScriptTag = document.getElementById("player");
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//   }

//   callback();
// };

// $(window).ready(() => {
//   loadScript(loadPlayer);
// });
