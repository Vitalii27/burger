var mapGoogle = (function() {
    var init = function() {
        var uluru = { lat: 50.005440, lng: 36.229861 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: uluru,
            scrollwheel: false

        });
        var icons = {
            position: {
                icon: {
                    url: './img/icons/map-marker.svg',
                    size: new google.maps.Size(40, 50),
                    scaledSize: new google.maps.Size(40, 50)
                }
            }

        }
        var features = [{
                position: new google.maps.LatLng(50.005819, 36.242458),
                type: 'position',
                contentString: 'First',
                content: 'First marker'
            },
            {
                position: new google.maps.LatLng(50.012406, 36.230650),
                type: 'position',
                contentString: 'Second',
                content: 'Second marker'
            },
            {
                position: new google.maps.LatLng(49.996768, 36.233155),
                type: 'position',
                contentString: 'Third',
                content: 'Third marker'
            },
            {
                position: new google.maps.LatLng(49.991605, 36.246825),
                type: 'position',
                contentString: 'Fourth',
                content: 'Fourth marker'
            }

        ];

        var infowindow = new google.maps.InfoWindow();

        features.forEach(function(feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map,

                title: feature.contentString
            });
            marker.addListener('click', function() {
                infowindow.setContent(feature.content);
                infowindow.open(map, marker);
                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    marker.setAnimation(null);
                }, 2100);
            })
        });

    };
    return { init: init };

})();