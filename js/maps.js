mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4896, 29.4268], // starting position [lng, lat]
    zoom: 15 // starting zoom
});
// Codeup
var codeupMarker = new mapboxgl.Marker()
    .setLngLat([-98.4896, 29.4268])
    .addTo(map)

var codeupPopup = new mapboxgl.Popup()
    .setLngLat([-98.4896, 29.4268])
    .setHTML('<p><em>Codeup Rocks!</em></p>')
    .addTo(map)

// Geekdom
var geekdomMarker = new mapboxgl.Marker()
    .setLngLat([-98.4935, 29.4264])
    .addTo(map);

var geekdomPopup = new mapboxgl.Popup()
    .setLngLat([-98.4935, 29.4264])
    .setHTML('<p>A great place to work!</p>')
    .addTo(map);

