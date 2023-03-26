$(document).ready(function () {
  //Hamburger Menu Animations
  $(".crossImage").click(function () {
    $(".mobileNavLinks").removeClass("mobileNavLinksShow");
    $(".socialIcons").removeClass("socialIconsHide");
  });

  $(".menuIcon").click(function () {
    $(".socialIcons").addClass("socialIconsHide");
    $("li").removeClass("active");
    $(".mobileNavLinks").addClass("mobileNavLinksShow");
  });

  $(".navItem").click(function () {
    $(".mobileNavLinks").removeClass("mobileNavLinksShow");
  });

  $(".pageSection").click(function () {
    $(".mobileNavLinks").removeClass("mobileNavLinksShow");
  });

  $("#HomePageWithCanvas").click(function () {
    $(".mobileNavLinks").removeClass("mobileNavLinksShow");
  });

  function checkWidth() {
    if ($(window).width() < "991") {
      $(".mobileNavLinks").css("display", "block");
    } else {
      $(".mobileNavLinks").css("display", "none");
      $(".socialIcons").removeClass("socialIconsHide");
    }
  }
  checkWidth();

  $(window).resize(function () {
    checkWidth();
  });
});