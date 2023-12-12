$(document).ready(function () {
  const shopVideo1 = $(".shopDropVideo")[0];
  const shopVideo2 = $(".shopDropVideo")[1];
  const shopVideo3 = $(".shopDropVideo")[2];
  const shopVideo4 = $(".shopDropVideo")[3];
  $("#videoOne").on("loadeddata", function (e) {
    shopVideo1.play();
    shopVideo1.pause();
    shopVideo1.currentTime = 0;

    shopVideo2.play();
    shopVideo2.pause();
    shopVideo2.currentTime = 0;

    shopVideo3.play();
    shopVideo3.pause();
    shopVideo3.currentTime = 0;

    shopVideo4.play();
    shopVideo4.pause();
    shopVideo4.currentTime = 0;
  });
  $(".shopDrop").disableSelection();

  $(".plusIcon").on("click", function (event) {
    $("#shopParagraphList").toggleClass("shopParagraphListShow");
    $(".plusIcon").toggleClass("plusIconOpen");
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
});
