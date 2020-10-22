"use strict";

$(document).ready(function () {
  var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1,
    zoomOffset: -1
  });
  var bounds = [[0, 0], [1000, 1000]];
  var image = L.imageOverlay('homemap.jpg', bounds).addTo(map);
  map.fitBounds(bounds);
});