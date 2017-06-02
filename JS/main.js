if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', mapGoogle.init);
}