function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + 
    "Longitude:" + position.coords.longitude); 
    var mapProp= {
	    center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
	    zoom: 15,
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	var myLatLng = {lat:position.coords.latitude, lng:position.coords.longitude};
	var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Wapping High School'
    });
}
function myMap() {
	getLocation();
	console.log("KDJFLKSHFIUGSHKDJFSK")
}
