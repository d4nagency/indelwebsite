//RoadMap Body Animations

function isEventInElement(event, element) {
  var rect = element.getBoundingClientRect();
  var x = event.clientX;
  if (x < rect.left || x >= rect.right) return false;
  var y = event.clientY;
  if (y < rect.top || y >= rect.bottom) return false;
  return true;
}

$(document).ready(function () {
  $(document).mousemove(function (event) {
    let activeVideo = null;
    if ($("#pageVideo").hasClass("activeVideo")) {
      activeVideo = $("#pageVideo");
    } else {
      activeVideo = $("#videoTwo");
    }
    const activePageName = activeVideo.attr("data-video-name");

    if (activePageName === "roadMap") {
      if (isEventInElement(event, $("#hoverHead")[0])) {
        $(".redTitleMonitization").addClass("roadMapTitleOne");
        $(".animateMonitazation").addClass("roadMapSubTextOne");
        // $(".headImage2").addClass("roadmapImages");
        $(".headLine").addClass("roadMapTitleOne");
        $(".mobileTattoodetails").addClass("detailsBottomHeightTwo");
        $(".handMobile, .chestMobile, .stomachMobile, .legMobile").addClass(
          "raodmapSegmentNoneTwo"
        );
      } else {
        $(".redTitleMonitization").removeClass("roadMapTitleOne ");
        $(".animateMonitazation").removeClass("roadMapSubTextOne");
        $(".headLine").removeClass("roadMapTitleOne");
        $(".mobileTattoodetails").removeClass("detailsBottomHeightTwo");
        $(".handMobile, .chestMobile, .stomachMobile, .legMobile").removeClass(
          "raodmapSegmentNoneTwo"
        );
      }
      if (isEventInElement(event, $("#hoverHand")[0])) {
        $(".redTitleNeedleDropText").addClass("roadMapTitleOne");
        $(".animateNeedlepara").addClass("roadMapSubTextOne");
        // $(".handImage2").addClass("roadmapImages");
        $(".handLine").addClass("roadMapTitleOne");
        $(".mobileTattoodetails").addClass("detailsBottomHeightThird");
        $(".headerMobile, .chestMobile, .stomachMobile, .legMobile").addClass(
          "raodmapSegmentNoneThird"
        );
      } else {
        $(".redTitleNeedleDropText").removeClass("roadMapTitleOne");
        $(".animateNeedlepara").removeClass("roadMapSubTextOne");
        $(".handLine").removeClass("roadMapTitleOne");
        $(".mobileTattoodetails").removeClass("detailsBottomHeightThird");
        $(
          ".headerMobile, .chestMobile, .stomachMobile, .legMobile"
        ).removeClass("raodmapSegmentNoneThird");
      }
      if (isEventInElement(event, $("#hoverChest")[0])) {
        $(".chestLine").addClass("roadMapTitleOne");
        // $(".chestImage2").addClass("roadmapImages");
        $(".redTitleMission").addClass("roadMapTitleOne");
        $(".animateMissionValues").addClass("roadMapSubTextOne");
        $(".mobileTattoodetails").addClass("detailsBottomHeightFourth");
        $(".headerMobile, .handMobile, .stomachMobile, .legMobile").addClass(
          "raodmapSegmentNoneFourth"
        );
      } else {
        $(".chestLine").removeClass("roadMapTitleOne");
        $(".redTitleMission").removeClass("roadMapTitleOne");
        $(".animateMissionValues").removeClass("roadMapSubTextOne");
        $(".mobileTattoodetails").removeClass("detailsBottomHeightFourth");
        $(".headerMobile, .handMobile, .stomachMobile, .legMobile").removeClass(
          "raodmapSegmentNoneFourth"
        );
      }
      if (isEventInElement(event, $("#hoverStomach")[0])) {
        $(".stomachLine").addClass("roadMapTitleOne");
        // $(".stomachImage2").addClass("roadmapImages");
        $(".redTitlePartnership").addClass("roadMapTitleOne");
        $(".animateParaPartnership").addClass("roadMapSubTextOne");
        $(".mobileTattoodetails").addClass("detailsBottomHeightFifth");
        $(".handMobile, .chestMobile, .headerMobile, .legMobile").addClass(
          "raodmapSegmentNoneFifth"
        );
      } else {
        $(".stomachLine").removeClass("roadMapTitleOne");
        $(".redTitlePartnership").removeClass("roadMapTitleOne");
        $(".animateParaPartnership").removeClass("roadMapSubTextOne");
        $(".mobileTattoodetails").removeClass("detailsBottomHeightFifth");
        $(".handMobile, .chestMobile, .headerMobile, .legMobile").removeClass(
          "raodmapSegmentNoneFifth"
        );
      }
      if (isEventInElement(event, $("#hoverLeg")[0])) {
        $(".legLine").addClass("roadMapTitleOne");
        // $(".legImage2").addClass("roadmapImages");
        $(".redTitleTeamComunity").addClass("roadMapTitleOne");
        $(".animateParateamcomunity").addClass("roadMapSubTextOne");
        $(".mobileTattoodetails").addClass("legWidth");
        $(".handMobile, .chestMobile, .headerMobile, .stomachMobile").addClass(
          "raodmapSegmentNoneSixth"
        );
      } else {
        $(".legLine").removeClass("roadMapTitleOne");
        $(".redTitleTeamComunity").removeClass("roadMapTitleOne");
        $(".animateParateamcomunity").removeClass("roadMapSubTextOne");
        $(".mobileTattoodetails").removeClass("legWidth");
        $(
          ".handMobile, .chestMobile, .headerMobile, .stomachMobile"
        ).removeClass("raodmapSegmentNoneSixth");
      }
    }
  });
  // $("#hoverHead").mouseenter(function () {
  //   $(".redTitleMonitization").addClass("roadMapTitleOne");
  //   $(".animateMonitazation").addClass("roadMapSubTextOne");
  //   $(".headImage2").addClass("roadmapImages");
  //   $(".headLine").addClass("roadMapTitleOne");
  //   $(".mobileTattoodetails").addClass("detailsBottomHeight");
  //   $(".handMobile, .chestMobile, .stomachMobile, .legMobile").css(
  //     "display",
  //     "none"
  //   );
  // }),
  //   $("#hoverHead").mouseleave(function () {
  //     $(".redTitleMonitization").removeClass("roadMapTitleOne ");
  //     $(".animateMonitazation").removeClass("roadMapSubTextOne");
  //     $(".headLine").removeClass("roadMapTitleOne");
  //     $(".mobileTattoodetails").removeClass("detailsBottomHeight");
  //     $(".handMobile, .chestMobile, .stomachMobile, .legMobile").css(
  //       "display",
  //       "block"
  //     );
  //   });

  //Hand Animation
  // $(".hoverHand").hover(
  //   function () {
  //     $(".redTitleNeedleDropText").addClass("roadMapTitleOne");
  //     $(".animateNeedlepara").addClass("roadMapSubTextOne");
  //     $(".handImage2").addClass("roadmapImages");
  //     $(".handLine").addClass("roadMapTitleOne");
  //     $(".mobileTattoodetails").addClass("detailsBottomHeight");
  //     $(".headerMobile, .chestMobile, .stomachMobile, .legMobile").css(
  //       "display",
  //       "none"
  //     );
  //   },
  //   function () {
  //     $(".redTitleNeedleDropText").removeClass("roadMapTitleOne");
  //     $(".animateNeedlepara").removeClass("roadMapSubTextOne");
  //     $(".handLine").removeClass("roadMapTitleOne");
  //     $(".mobileTattoodetails").removeClass("detailsBottomHeight");
  //     $(".headerMobile, .chestMobile, .stomachMobile, .legMobile").css(
  //       "display",
  //       "block"
  //     );
  //   }
  // );

  //Chest Animation
  // $(".hoverChest").hover(
  //   function () {
  //     $(".chestLine").addClass("roadMapTitleOne");
  //     $(".chestImage2").addClass("roadmapImages");
  //     $(".redTitleMission").addClass("roadMapTitleOne");
  //     $(".animateMissionValues").addClass("roadMapSubTextOne");
  //     $(".mobileTattoodetails").addClass("detailsBottomHeight");
  //     $(".headerMobile, .handMobile, .stomachMobile, .legMobile").css(
  //       "display",
  //       "none"
  //     );
  //   },
  //   function () {
  //     $(".chestLine").removeClass("roadMapTitleOne");
  //     $(".redTitleMission").removeClass("roadMapTitleOne");
  //     $(".animateMissionValues").removeClass("roadMapSubTextOne");
  //     $(".mobileTattoodetails").removeClass("detailsBottomHeight");
  //     $(".headerMobile, .handMobile, .stomachMobile, .legMobile").css(
  //       "display",
  //       "block"
  //     );
  //   }
  // );

  //Stomach Animation
  // $(".hoverStomach").hover(
  //   function () {
  //     $(".stomachLine").addClass("roadMapTitleOne");
  //     $(".stomachImage2").addClass("roadmapImages");
  //     $(".redTitlePartnership").addClass("roadMapTitleOne");
  //     $(".animateParaPartnership").addClass("roadMapSubTextOne");
  //     $(".mobileTattoodetails").addClass("detailsBottomHeight");
  //     $(".handMobile, .chestMobile, .headerMobile, .legMobile").css(
  //       "display",
  //       "none"
  //     );
  //   },
  //   function () {
  //     $(".stomachLine").removeClass("roadMapTitleOne");
  //     $(".redTitlePartnership").removeClass("roadMapTitleOne");
  //     $(".animateParaPartnership").removeClass("roadMapSubTextOne");
  //     $(".mobileTattoodetails").removeClass("detailsBottomHeight");
  //     $(".handMobile, .chestMobile, .headerMobile, .legMobile").css(
  //       "display",
  //       "block"
  //     );
  //   }
  // );

  //Leg Animation
  // $(".hoverLeg").hover(
  //   function () {
  //     $(".legLine").addClass("roadMapTitleOne");
  //     $(".legImage2").addClass("roadmapImages");
  //     $(".redTitleTeamComunity").addClass("roadMapTitleOne");
  //     $(".animateParateamcomunity").addClass("roadMapSubTextOne");
  //     $(".mobileTattoodetails").addClass("legWidth");
  //     $(".handMobile, .chestMobile, .headerMobile, .stomachMobile").css(
  //       "display",
  //       "none"
  //     );
  //   },
  //   function () {
  //     $(".legLine").removeClass("roadMapTitleOne");
  //     $(".redTitleTeamComunity").removeClass("roadMapTitleOne");
  //     $(".animateParateamcomunity").removeClass("roadMapSubTextOne");
  //     $(".mobileTattoodetails").removeClass("legWidth");
  //     $(".handMobile, .chestMobile, .headerMobile, .stomachMobile").css(
  //       "display",
  //       "block"
  //     );
  //   }
  // );
});
