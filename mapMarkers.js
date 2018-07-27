function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mapInit);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function mapInit(position) {
    console.log(position);
    console.log("Latitude: " + position.coords.latitude + 
    "Longitude:" + position.coords.longitude); 
    var mapProp= {
	    center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
	    zoom: 15,
    };
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var infowindow=new google.maps.InfoWindow();
	var myLatLng = {lat:position.coords.latitude, lng:position.coords.longitude};
  var pinColor = "00FF00";
  var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
    new google.maps.Size(21, 34),
    new google.maps.Point(0,0),
    new google.maps.Point(10, 34));
	var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Your Position'
    });
  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      icon: pinImage
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
  var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: myLatLng,
          radius: 500,
          type: ['gym']
  }, callback);

 function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }
}
function myMap() {
	getLocation();
	console.log("KDJFLKSHFIUGSHKDJFSK")
}
