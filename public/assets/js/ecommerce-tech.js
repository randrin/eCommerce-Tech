$(document).ready(function () {
  ("use strict");

  // Close Notification Banner
  var $notificationClose = $(".notification .notify-action").find(
    ".icon-close"
  );
  $notificationClose.on("click", function (e) {
    $(this).parent().parent().parent().css("display", "none");
  });

  // Disable initial effet scroll
  var $initialScroll = $(".sticky-header");
  var $newScroll = $(".header-middle");
  var $headerRight = $(".header-right");
  var $headerRightScroll = $(".header-right-scroll");
  var $categoryDropdown = $(".dropdown.category-dropdown");
  $headerRightScroll.addClass("scroll");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 380) {
      if ($initialScroll.length && $(window).width() >= 992) {
        $initialScroll.addClass("stop-fixed");
      }
      if (
        $headerRight.length &&
        $headerRightScroll.length &&
        $(window).width() >= 992
      ) {
        $headerRight.addClass("scroll");
        $headerRightScroll.removeClass("scroll");
      }
      if ($newScroll.length && $(window).width() >= 992) {
        $newScroll.addClass("new-fixed");
      }
      if ($categoryDropdown.length && $(window).width() >= 992) {
        $categoryDropdown.addClass("category-dropdown-scroll");
      }
    } else {
      $initialScroll.removeClass("stop-fixed");
      $newScroll.removeClass("new-fixed");
      $headerRight.removeClass("scroll");
      $headerRightScroll.addClass("scroll");
      $categoryDropdown.removeClass("category-dropdown-scroll");
    }
  });
});
