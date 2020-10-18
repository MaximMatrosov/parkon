$(document).ready(function () {
    var map = L.map('map').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF4aW1rYSIsImEiOiJja2dlZ242amcwaGR0MnFzNHJscmozdWY4In0.sat5Ne0atewTwk3Fu1hHhw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/light-v10',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(map);
    
    function onLocationFound(e) {
		var radius = e.accuracy / 2;

		L.marker(e.latlng).addTo(map)
			.bindPopup("Вы в радиусе " + radius + " метров от данной точки").openPopup();

		L.circle(e.latlng, radius, {color:'#000000', fillColor: '#000000', opacity: 0.05}).addTo(map);
	}

	function onLocationError(e) {
		alert(e.message);
	}

	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);

	map.locate({setView: true, maxZoom: 16});
});