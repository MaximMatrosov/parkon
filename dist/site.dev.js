"use strict";

$(document).ready(function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  window.addEventListener('resize', function () {
    // We execute the same script as before
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  });
  $('body').on('click', '[data-tab]', function (e) {
    e.preventDefault();
    $(".tab.active").removeClass("active");
    var tabId = $(e.currentTarget).data("tab");
    $("#" + tabId).addClass("active");
  });
});