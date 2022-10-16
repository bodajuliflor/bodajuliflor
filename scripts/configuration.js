// Idioma
const langJs = "es";

// Idioma js en MODELO e INVITACION
const langJsVariante = "es-AR";
const langDefault = "es-AR";

let windowElement = $(window);

// Cuenta regresiva
const fechaCuentaRegresiva = "01/21/2023 19:00:00";

// Mapas
const embeddedUrlCeremoniaFiesta =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.150211868588!2d-58.176657368466465!3d-34.90267971813002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d9edd7d22de1%3A0x37deb356ccd9235!2sFinca%20Sol%20y%20Luna!5e0!3m2!1ses-419!2sar!4v1663597993794!5m2!1ses-419!2sar";
const urlCeremoniaFiesta = "https://goo.gl/maps/ro4qbym4ux2Jrcqr9";
const embeddedUrlCivil =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.150211868588!2d-58.176657368466465!3d-34.90267971813002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d9edd7d22de1%3A0x37deb356ccd9235!2sFinca%20Sol%20y%20Luna!5e0!3m2!1ses-419!2sar!4v1663597993794!5m2!1ses-419!2sar"; // TODO: Change this
const urlCivil = "https://goo.gl/maps/ro4qbym4ux2Jrcqr9"; // TODO: Change this

let device = "desktop";

const CBUvalue = "0070064130004036316217";

// Consulto tipo de dispositivo
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  device = "mobile";
} else {
  device = "desktop";
}

windowElement.ready(() => {
  // Portada parallax
  let imagePortadaParallax;
  let imageInstagramParallax;
  if (device == "mobile" || $(window).width() < 768) {
    // Aceptar webp?
    if (support_format_webp()) {
      imagePortadaParallax = "./assest/images/portada-mobile.webp";
      imageInstagramParallax = "./assets/images/instagram_mobile.webp";
    } else {
      imagePortadaParallax = "./assets/images/portada-mobile.jpg";
      imageInstagramParallax = "./assets/images/instagram_mobile.jpg";
    }
  } else {
    // Aceptar webp?
    if (support_format_webp()) {
      imagePortadaParallax = "./assets/images/portada-3.webp";
      imageInstagramParallax = "./assets/images/instagram.webp";
    } else {
      imagePortadaParallax = "./assets/images/portada-3.jpg";
      imageInstagramParallax = "./assets/images/instagram.jpg";
    }
  }

  $(".portada").parallax({
    imageSrc: imagePortadaParallax,
  });

  $(".instagram").parallax({
    imageSrc: imageInstagramParallax,
  });
});

// Funciones y variables globales
// Funcion para validar formato url
function is_url(str) {
  regexp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

// Soporte WEBP
function support_format_webp() {
  var elem = document.createElement("canvas");

  if (!!(elem.getContext && elem.getContext("2d"))) {
    // was able or not to get WebP representation
    return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  } else {
    // very old browser like IE 8, canvas not supported
    return false;
  }
}
