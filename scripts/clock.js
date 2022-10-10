// Cuenta regresiva

// Set the date we're counting down to
let countDownDate = new Date(fechaCuentaRegresiva).getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#dias .number").text(days);
  $("#horas .number").text(hours);
  $("#minutos .number").text(minutes);
  $("#segundos .number").text(seconds);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    $("#dias .number").text("00");
    $("#horas .number").text("00");
    $("#minutos .number").text("00");
    $("#segundos .number").text("00");
  }
}, 1000);
