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
  shop: {
    src: "./assets/videos/shop.mp4",
    end: 5,
    name: "shop",
  },
};
let disabled = false;

$(document).ready(function () {
  //document.body.style.height = window.innerHeight + 'px';
  verifyRoute();

  if (navigator.appVersion.indexOf("Macintosh") != -1) {
    $("body").css("background", "#c8c1ba");
  }

  $(".navItem").click(function (event) {
    event.preventDefault();
    const page = $(this).attr("id");
    history.pushState({}, "", page === "home" ? "/" : page);
    updatePage(page);
  });

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

  const updatePage = (page) => {
    if (disabled === false) {
      disabled = true;
      let videoOne = $("#videoOne")[0];
      let videoTwo = $("#videoTwo")[0];

      //if videoOne is active
      if ($("#videoOne").hasClass("activeVideo")) {
        updateVideosComplete(page, $("#videoOne"), $("#videoTwo"), videoOne);
      }

      //if videoTwo is active
      else {
        updateVideosComplete(page, $("#videoTwo"), $("#videoOne"), videoTwo);
      }
      // Page Segment Animations
    }
  };

  const updateVideosComplete = (page, activeVideo, inActiveVideo, video) => {
    if (page === "home") {
      inActiveVideo.addClass("homepageVideo");
    } else {
      inActiveVideo.removeClass("homepageVideo");
    }

    if (page === "buyNow") {
      inActiveVideo.addClass("buyNowVideo");
    } else {
      inActiveVideo.removeClass("buyNowVideo");
    }

    if (page === "shop") {
      inActiveVideo.addClass("shopVideo");
    } else {
      inActiveVideo.removeClass("shopVideo");
    }

    if (page === "roadMap") {
      inActiveVideo.addClass("roadMapVideo");
      $("#roadMapSegment").removeClass("roadMapSegmentNone");
    } else {
      inActiveVideo.removeClass("roadMapVideo");
      $("#roadMapSegment").addClass("roadMapSegmentNone");
      $("#RoadMapPageWithCanvas").removeClass("active");
    }

    /*
        if (page !== "roadMap" && $("#RoadMapPageWithCanvas").hasClass("active")) {
          $("#RoadMapPageWithCanvas").removeClass("active");
          const canvas = $("#RoadMapPageWithCanvas .revaddonpaintbrush");
          for (let i = 0; i < canvas.length; i++) {
            canvas[i].width += 0;
          }
        }
        */

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

    if (video.currentTime < 8) {
      updateVideos(page);
    } else if (video.duration - video.currentTime > 8) {
      updateVideos(page);
    } else {
      updateVideos(page);
    }
  };

  const updateVideos = (page) => {
    const newSrc = videoSrcs[page].src;
    let activeVideo;
    let inActiveVideo;
    if ($("#videoOne").hasClass("activeVideo")) {
      activeVideo = $("#videoOne");
      inActiveVideo = $("#videoTwo");
    } else {
      activeVideo = $("#videoTwo");
      inActiveVideo = $("#videoOne");
    }
    inActiveVideo.fadeOut(1000);

    //if videoTwo is active

    inActiveVideo.attr("src", newSrc);
    inActiveVideo.attr("data-video-name", page);
    activeVideo.fadeOut(1000);
    if (activeVideo.hasClass("activeVideo")) {
      activeVideo.removeClass("activeVideo");
      activeVideo.addClass("inactiveVideo");
    }
    if (inActiveVideo.hasClass("inactiveVideo")) {
      inActiveVideo.removeClass("inactiveVideo");
      inActiveVideo.addClass("activeVideo");
    }

    inActiveVideo.fadeIn(1500);

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

    disabled = false;

    updateText(page);
  };

  const updateText = (page) => {
    if (page != "home") {
      showCanvas = false;
      $("#mainHomeText").removeClass("activeSegment");
      $("#mainHomeText").removeClass("homeSectionContent");
      $("#mainHomeText").addClass("inactiveSegment");
      $(".homeText").removeClass("homeSectionContent");
    } else if (page == "home") {
      showCanvas = true;
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
      $(".inactiveVideo").removeClass("buyNowVideo");
      $("#buyNowShows").removeClass("imageLayersShow");
      $("#buyNowSegment").removeClass("activeSegment");
      $("#buyNowSegment").addClass("inactiveSegment");
    }

    if (page === "shop") {
      $(".activeVideo").addClass("shopVideo");
      $("#shopSegment").addClass("activeSegment");
      $("#shopSegment").removeClass("inactiveSegment");
      $("#shopTitle").addClass("redTitleAnimateShow");
      $("#shopParagraph").addClass("animateParaSectionShow2");
      $("#shopDropsWrapper").addClass("shopDropsWrapperAnimateShow");
      $("#shopBottomParagraph").addClass("animateParaSectionShow");
      $("body .pageSection").addClass("scrollYAuto");
    } else if (page !== "shop") {
      $(".activeVideo").removeClass("shopVideo");
      $(".inactiveVideo").removeClass("shopVideo");
      $("#shopSegment").removeClass("activeSegment");
      $("#shopSegment").addClass("inactiveSegment");
      $("#shopTitle").removeClass("redTitleAnimateShow");
      $("#shopParagraph").removeClass("animateParaSectionShow2");
      $("#shopDropsWrapper").removeClass("shopDropsWrapperAnimateShow");
      $("#shopBottomParagraph").removeClass("animateParaSectionShow");
      $("body .pageSection").removeClass("scrollYAuto");
    }

    $(".thirdVideo").css("opacity", 0);

    if (page === "about") {
      // set videoThree to block
      $(".thirdVideo").css("display", "block");
    } else {
      // set videoThree to display none
      $(".thirdVideo").css("display", "none");
    }
  };

  var audio = $("#audio")[0];
  $(".aboutHoverEffect").mouseenter(function () {
    audio.play();
    audio.loop = true;
    $("#videoThree").css({ opacity: "1", transition: "opacity 0.5s" });
  });
  $(".aboutHoverEffect").mouseleave(function () {
    audio.pause();
    $("#videoThree").css({ opacity: "0", transition: "opacity 0.5s" });
  });

  //Navigation Bottom Line Animation
  $("li.nav-links").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  var audioTwo = $("#homeAudio")[0];
  audioTwo.volume = 0.6;
  $("#rev_slider_1_1_wrapper").on("mousemove touchmove", function (event) {
    let relX = event.pageX;
    let relY = event.pageY;
    let height = $(this).height();
    let width = $(this).width();
    // var relBoxCoords = "(" + relX + "," + relY + ")";
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

    var isPlaying =
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
  $(".hoverDivMain").mouseleave(function () {
    audioTwo.pause();
    $("#videoThree").css({ opacity: "0", transition: "opacity 0.5s" });
  });

  $("#home").click(function () {
    $("li").removeClass("active");
  });

  $("#home, #buyNow, #roadMap").click(function () {
    $(".thirdVideo").addClass("nonethirdVideo");
  });

  $(".about").click(function () {
    $(".thirdVideo").removeClass("nonethirdVideo");
  });

  $(".prog-bar").addClass("loadingBar");
  // setTimeout(function () {
  //   $(".preloader-plus").addClass("complete");
  // }, 1000);

  $("#videoOne").on("loadeddata", function () {
    setTimeout(function () {
      $(".preloader-plus").addClass("complete");
      handleRouting();
    }, 1000);
  });

  $(".shopDrop").on("mouseenter", function (event) {
    if (window.innerWidth > 768) {
      var shopVideo = $(this).find(".shopDropVideo")[0];
      var isPlaying =
        shopVideo.currentTime > 0 &&
        !shopVideo.paused &&
        !shopVideo.ended &&
        shopVideo.readyState > shopVideo.HAVE_CURRENT_DATA;

      //$(this).find('.shopDropImg').addClass('shopDropImgHide');
      //$(this).find('.shopDropVideo').addClass('shopDropVideoShow');

      if (!isPlaying) {
        shopVideo.play();
      }
    }
  });

  $(".shopDrop").on("mouseleave", function (event) {
    if (window.innerWidth > 768) {
      var shopVideo = $(this).find(".shopDropVideo")[0];
      var isPlaying =
        shopVideo.currentTime > 0 &&
        !shopVideo.paused &&
        !shopVideo.ended &&
        shopVideo.readyState > shopVideo.HAVE_CURRENT_DATA;

      //$(this).find('.shopDropImg').removeClass('shopDropImgHide');
      //$(this).find('.shopDropVideo').removeClass('shopDropVideoShow');

      if (isPlaying) {
        shopVideo.pause();
        shopVideo.currentTime = 0;
      }
    }
  });

  $(".shopDrop").on("touchstart", function (event) {
    var shopVideo = $(this).find(".shopDropVideo")[0];

    shopVideo.play();

    /*
    var isPlaying =
      shopVideo.currentTime > 0 &&
      !shopVideo.paused &&
      !shopVideo.ended &&
      shopVideo.readyState > shopVideo.HAVE_CURRENT_DATA;
    
    //$(this).find('.shopDropImg').addClass('shopDropImgHide');
    //$(this).find('.shopDropVideo').addClass('shopDropVideoShow');

    if (!isPlaying) {
      shopVideo.play();
    }
    */
  });

  $("#rev_slider_6_1_wrapper").on("mousemove touchmove", function (event) {
    var isPlaying =
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

  $(".shopDrop").disableSelection();

  $(".plusIcon").on("click", function (event) {
    $("#shopParagraphList").toggleClass("shopParagraphListShow");
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
