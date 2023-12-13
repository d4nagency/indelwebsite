"use strict";
$(document).ready(function () {
  const isAudioMuted = () => $("#mute_btn").hasClass("hide");
  const audio = $("#audio")[0];
  $(".aboutHoverEffect").mouseenter(function () {
    if (!isAudioMuted()) {
      audio.play();
      audio.loop = true;
    }
    $("#aboutEffectVideo").css({ opacity: "1", transition: "opacity 0.5s" });
  });

  $(".aboutHoverEffect").mouseleave(function () {
    if (!isAudioMuted()) {
      audio.pause();
    }
    $("#aboutEffectVideo").css({ opacity: "0", transition: "opacity 0.5s" });
  });

  // Indelible logo hover effect with audio
  const audioTwo = $("#homeAudio")[0];
  audioTwo.volume = 0.6;
  $("#rev_slider_1_1_wrapper").on("mousemove touchmove", function (event) {
    let relX = event.pageX;
    let relY = event.pageY;
    let height = $(this).height();
    let width = $(this).width();
    let artWidth,
      artHeight = 400;
    if (width > 1000) {
      artWidth = 990;
    } else {
      artWidth = width * 0.8;
    }

    let top = (height - artHeight) / 2;
    let bottom = height - top;
    let left = (width - artWidth) / 2;
    let right = width - left;

    const isPlaying =
      audioTwo.currentTime > 0 &&
      !audioTwo.paused &&
      !audioTwo.ended &&
      audioTwo.readyState > audioTwo.HAVE_CURRENT_DATA;
    if (relY > top && relY < bottom && relX > left && relX < right) {
      if (!isPlaying && !isAudioMuted()) {
        audioTwo.play();
      }
    } else {
      if (isPlaying && !isAudioMuted()) {
        audioTwo.pause();
      }
    }
  });

  // Roadmap Body hover effect
  $("#rev_slider_6_1_wrapper").on("mousemove touchmove", function (event) {
    const isPlaying =
      audioTwo.currentTime > 0 &&
      !audioTwo.paused &&
      !audioTwo.ended &&
      audioTwo.readyState > audioTwo.HAVE_CURRENT_DATA;

    if (
      isEventInElement(event, $("#hoverHead")[0]) ||
      isEventInElement(event, $("#hoverHand")[0]) ||
      isEventInElement(event, $("#hoverChest")[0]) ||
      isEventInElement(event, $("#hoverStomach")[0]) ||
      isEventInElement(event, $("#hoverLeg")[0])
    ) {
      if (!isPlaying && !isAudioMuted()) {
        audioTwo.play();
      }
    } else {
      if (isPlaying && !isAudioMuted()) {
        audioTwo.pause();
      }
    }
  });
});
