$(document).ready(function () {
  "use strict";

  // Close Notifications Banner
  var $notificationClose = $(".notification .notify-action").find(
    ".icon-close"
  );
  $notificationClose.on("click", function (e) {
    $(this).parent().parent().parent().css("display", "none");
  });
});
