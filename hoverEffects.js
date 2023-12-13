"use strict";
$(document).ready(function () {
  const audio = $("#audio")[0];
  $(".aboutHoverEffect").mouseenter(function () {
    audio.play();
    audio.loop = true;
    $("#videoThree").css({ opacity: "1", transition: "opacity 0.5s" });
  });

  $(".aboutHoverEffect").mouseleave(function () {
    audio.pause();
    $("#videoThree").css({ opacity: "0", transition: "opacity 0.5s" });
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
      if (!isPlaying) {
        audioTwo.play();
      }
    } else {
      if (isPlaying) {
        audioTwo.pause();
      }
    }
    // $("#videoThree").css({"opacity":"1", "transition":"opacity 0.5s"})
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
      if (!isPlaying) {
        audioTwo.play();
      }
    } else {
      if (isPlaying) {
        audioTwo.pause();
      }
    }
  });
});
