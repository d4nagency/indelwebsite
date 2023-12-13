"use strict";
let videoSrcs = {
  home: {
    src: "./assets/videos/landing_page_01.mp4",
    end: 9,
    name: "home",
  },
  about: {
    src: "./assets/videos/about_01.mp4",
    end: 5,
    name: "about",
  },
  roadMap: {
    src: "./assets/videos/roadmap_01.mp4",
    end: 7,
    name: "roadMap",
  },
  buyNow: {
    src: "./assets/videos/genesis_01.mp4",
    end: 5,
    name: "buyNow",
  },
};

$(document).ready(function () {
  const path = verifyRoute();

  if (navigator.appVersion.indexOf("Macintosh") != -1) {
    $("body").css("background", "#c8c1ba");
  }

  function verifyRoute() {
    let pagePath = window.location.pathname.replace("/", "");
    if (pagePath === "") {
      pagePath = "home";
    }
    if (!Object.keys(videoSrcs).includes(pagePath)) {
      window.location.href = "/404.html";
      return "404";
    }
    return pagePath;
  }

  const handleRouting = () => {
    const pagePath = verifyRoute();
    updatePage(pagePath);
  };
  $(window).on("popstate", handleRouting);

  // set page video
  updateVideos(path);
  // remove loader after page video is loaded
  $("#pageVideo").on("loadeddata", function () {
    setTimeout(function () {
      $(".preloader-plus").addClass("complete");
    }, 1000);
  });

  function updateVideos(page) {
    const newSrc = videoSrcs[page].src;
    let pageVideo = $("#pageVideo");
    pageVideo.attr("src", newSrc);
    pageVideo.attr("data-video-name", page);

    if (page === "home") {
      pageVideo.addClass("homepageVideo");
    } else {
      pageVideo.removeClass("homepageVideo");
    }

    if (page === "buyNow") {
      pageVideo.addClass("buyNowVideo");
    } else {
      pageVideo.removeClass("buyNowVideo");
    }

    if (page === "roadMap") {
      pageVideo.addClass("roadMapVideo");
      $("#roadMapSegment").removeClass("roadMapSegmentNone");
    } else {
      pageVideo.removeClass("roadMapVideo");
      $("#roadMapSegment").addClass("roadMapSegmentNone");
      $("#RoadMapPageWithCanvas").removeClass("active");
    }

    if (
      page == "roadMap" &&
      $("#RoadMapPageWithCanvas .revaddonpaintbrush").length > 0
    ) {
      revapi3.revredraw();
      revapi4.revredraw();
    }

    if (page !== "home" && $("#HomePageWithCanvas").hasClass("active")) {
      $("#HomePageWithCanvas").removeClass("active");
    }

    if (page === "home") {
      setTimeout(() => {
        const activeVideo =
          $(".activeVideo")[0].attributes["data-video-name"].value;
        if (activeVideo === "home") {
          $("#HomePageWithCanvas").addClass("active");
        }
      }, 8000);
    }
    if (page === "roadMap") {
      setTimeout(() => {
        const activeVideo =
          $(".activeVideo")[0].attributes["data-video-name"].value;
        if (activeVideo === "roadMap") {
          $("#RoadMapPageWithCanvas").addClass("active");
        }
      }, 6000);
    }

    updateText(page);
  }

  function updateText(page) {
    if (page != "home") {
      $("#mainHomeText").removeClass("activeSegment");
      $("#mainHomeText").removeClass("homeSectionContent");
      $("#mainHomeText").addClass("inactiveSegment");
      $(".homeText").removeClass("homeSectionContent");
    } else if (page == "home") {
      $("#mainHomeText").addClass("homeSectionContent");
      $("#mainHomeText").removeClass("homeSectionText");
      $("#mainHomeText").removeClass("inactiveSegment");
      $("#mainHomeText").addClass("activeSegment");
      $(".homeText").addClass("homeSectionContent");
    }

    if (page == "about") {
      $("#redTitleAbout").addClass("redTitleAnimateShow");
      $("#whiteSubText").addClass("subTextShow");
      $("#aboutParagraph").addClass("animateParaSectionShow");
      $("#aboutText").addClass("activeSegment");
      $(".thirdVideo").addClass("showThirdVideo");
      $("#aboutText").removeClass("inactiveSegment");
      $("#redTitleAbout").removeClass("redTitleAnimate");
      $("#whiteSubText").removeClass("subTextHide");
      $("#aboutParagraph").removeClass("animateParaSection");
      $(".thirdVideo").removeClass("hideThirdVideo");
    } else if (page != "about") {
      $("#aboutParagraph").removeClass("animateParaSectionShow");
      $("#redTitleAbout").removeClass("redTitleAnimateShow");
      $("#whiteSubText").removeClass("subTextShow");
      $("#aboutText").removeClass("activeSegment");
      $(".thirdVideo").removeClass("showThirdVideo");
      $("#aboutParagraph").addClass("animateParaSection");
      $("#whiteSubText").addClass("subTextHide");
      $("#redTitleAbout").addClass("redTitleAnimate");
      $("#aboutText").addClass("inactiveSegment");
      $(".thirdVideo").addClass("hideThirdVideo");
    }
    if (page === "roadMap") {
      // $(".activeVideo").addClass("roadmapWidth");
      $("#roadMapTitle").addClass("aboutRoadMapShow");
      $("#roadMapSegment").addClass("activeSegment");
      $("#roadMapSegment").removeClass("inactiveSegment");
    } else if (page !== "roadMap") {
      $("#roadMapTitle").removeClass("aboutRoadMapShow");
      $("#roadMapSegment").removeClass("activeSegment");
      $("#roadMapSegment").addClass("inactiveSegment");
      $(
        ".headImage2, .handImage2, .chestImage2, .stomachImage2, .legImage2"
      ).removeClass("roadmapImages");
    }

    if (page === "buyNow") {
      $(".activeVideo").addClass("buyNowVideo");
      $("#buyNowShows").addClass("imageLayersShow");
      $("#buyNowSegment").addClass("activeSegment");
      $("#buyNowSegment").removeClass("inactiveSegment");
    } else if (page !== "buyNow") {
      $(".activeVideo").removeClass("buyNowVideo");
      $("#buyNowShows").removeClass("imageLayersShow");
      $("#buyNowSegment").removeClass("activeSegment");
      $("#buyNowSegment").addClass("inactiveSegment");
    }

    $(".thirdVideo").css("opacity", 0);

    if (page === "about") {
      // set videoThree to block
      $(".thirdVideo").css("display", "block");
    } else {
      // set videoThree to display none
      $(".thirdVideo").css("display", "none");
    }
  }

  $("#home").click(function () {
    $("li").removeClass("active");
  });

  $("#home, #buyNow, #roadMap").click(function () {
    $(".thirdVideo").addClass("nonethirdVideo");
  });

  $(".about").click(function () {
    $(".thirdVideo").removeClass("nonethirdVideo");
  });

  $(".plusIcon").on("click", function (event) {
    $(".plusIcon").toggleClass("plusIconOpen");
  });
});

$.fn.extend({
  disableSelection: function () {
    this.each(function () {
      this.onselectstart = function () {
        return false;
      };
      this.unselectable = "on";
      $(this).css("-moz-user-select", "none");
      $(this).css("-webkit-user-select", "none");
    });
  },
});
