mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-97.2163642, 27.7418208], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.on('load', function() {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Catfish Charlies</strong><p><a href="https://www.catfishcharlies.net/" target="_blank" title="Opens in a new window">Catfish Charlies</a>, Corpus Christi. Fried catfish, shrimp & oysters meet other Louisiana fare in a casual, wharf-style setting.</p>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-97.3634, 27.7094]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Docs Seafood & Steaks</strong><p><a href="http://docsseafoodandsteaks.com/" target="_blank" title="Opens in a new window">Docs Seafood & Steaks</a>, Corpus Christi. A lively selection for surf & turf in an open-air setting overlooking the water, plus live music.</p>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-97.2398, 27.6332]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Trout Stree Bar & Grill</strong><p><a href="https://www.tsbag.com/" target="_blank" title="Opens in a new window">Trout Stree Bar & Grill</a>, Port Aransas. Cocktails & Cajun-inspired seafood in airy environs, with an outdoor deck offering marina views.</p>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-97.0608, 27.8386]
                    }
                }
            ]
        }
    });


map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
        'icon-image': '{icon}-15',
        'icon-allow-overlap': true
    }
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
    map.on('click', 'places', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', function() {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', function() {
    map.getCanvas().style.cursor = '';
});
});