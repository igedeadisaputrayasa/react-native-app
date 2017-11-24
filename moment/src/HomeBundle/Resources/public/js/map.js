(function() {
	if(!!navigator.geolocation) {
		var map;
    	var mapOptions = {
    		zoom: 15,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};
    	map = new google.maps.Map(document.getElementById('maps-location'), mapOptions);

		navigator.geolocation.getCurrentPosition(function(position) {
    		var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    		var infowindow = new google.maps.InfoWindow({
    			map: map,
    			position: geolocate,
    			content: 
    				'<strong>You Are Here</strong><br />' +
    				'Latitude: ' + position.coords.latitude + '<br />' +
    				'Longitude: ' + position.coords.longitude + '<br />'
    		});
    		map.setCenter(geolocate);
    		var marker = new google.maps.Marker({
	          position: geolocate,
	          map: map,
	          title: 'Current Location!'
	        });
		});
		$('#warning-support').addClass("hide");
	} else {
		$('#warning-support').addClass("show");
	}
})();