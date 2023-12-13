$(document).ready(function () {
  const video1 = document.getElementById("videoOne");
  const video2 = document.getElementById("videoTwo");
  const video3 = document.getElementById("videoThree");
  const mainHomeAudio = document.getElementById("mainHomeAudio");

  $("#videoOne").on("loadeddata", function (e) {
    if (video1.paused && video1.currentTime == 0) video1.play();
    if (video2.paused && video2.currentTime == 0) video2.play();
    if (video3.paused && video3.currentTime == 0) video3.play();

    muteAudio();
  });

  function muteAudio() {
    $("#mute_btn").addClass("hide");
    $("#unmute_btn").removeClass("hide");
    mainHomeAudio.muted = true;
  }

  $("#unmute_btn").on("click touchstart", function (e) {
    e.preventDefault();
    mainHomeAudio.muted = false;

    $("#mute_btn").removeClass("hide");
    $("#unmute_btn").addClass("hide");
    mainHomeAudio.play();
  });

  $("#mute_btn").on("click touchstart", function (e) {
    e.preventDefault();
    mainHomeAudio.muted = true;
    $("#mute_btn").addClass("hide");
    $("#unmute_btn").removeClass("hide");
  });

  setTimeout(function () {
    if (mainHomeAudio.currentTime > 0 && !mainHomeAudio.muted) {
      $("#mute_btn").toggleClass("hide");
      $("#unmute_btn").toggleClass("hide");
    }
  }, 500);

  $(window).blur(function () {
    mainHomeAudio.muted = true;
  });
  $(window).focus(function () {
    mainHomeAudio.muted = false;
    if ($("#mute_btn").hasClass("hide")) {
      $("#mute_btn").removeClass("hide");
      $("#unmute_btn").addClass("hide");
    }
  });
});
