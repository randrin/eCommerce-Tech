$(document).ready(function () {
  "use strict";

  // Close Notification Banner
  var $notificationClose = $(".notification .notify-action").find(
    ".icon-close"
  );
  $notificationClose.on("click", function (e) {
    $(this).parent().parent().parent().css("display", "none");
  });
});
