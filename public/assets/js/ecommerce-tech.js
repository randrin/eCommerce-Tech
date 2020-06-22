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
  var $multilanguages = $(".header-dropdown.store-multilanguages");
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
        $categoryDropdown
          .removeClass("store-display-none")
          .addClass("category-dropdown-scroll");
        $categoryDropdown.parent().removeClass("store-display-none");
        $(".store-multilanguages.header-dropdown").addClass(
          "store-multilanguages-scroll"
        );
      }
    } else {
      $initialScroll.removeClass("stop-fixed");
      $newScroll.removeClass("new-fixed");
      $headerRight.removeClass("scroll");
      $headerRightScroll.addClass("scroll");
      $categoryDropdown
        .removeClass("category-dropdown-scroll")
        .addClass("store-display-none");
      $categoryDropdown.parent().addClass("store-display-none");
      $(".store-multilanguages.header-dropdown").removeClass(
        "store-multilanguages-scroll"
      );
    }
  });

  // Fix Modal logout
  var $clickLogout = $("#logout-modal");
  var $clickResetPassword = $("#reset-password");
  $clickLogout.on("click", function () {
    var $modal = $(".modal-open").find(".modal-backdrop");
    $modal.removeClass("modal-backdrop");
  });

  $clickResetPassword.on("click", function () {
    console.log("browser refresh .....");
    var $modal = $(".modal-backdrop");
    $modal.removeClass("modal-backdrop");
  });

  $("#reloadBrowser").on("click", function () {
    console.log("browser refresh .....");
    window.location.replace("/");
  });

  // Disable Popup Newletter if checkox is checked
  if (localStorage.getItem("newsletter-popup")) {
    console.log("enter Disable ..... ");
    setTimeout(() => {
      var $popup = $(".mfp-bg").addClass("d-none");
    }, 10000);
  }
});
