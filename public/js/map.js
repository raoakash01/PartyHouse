mapboxgl.accessToken = 'pk.eyJ1IjoicmFvYWthc2gyNjkiLCJhIjoiY2xzM2IwMGk5MHV0dzJpcGlncWxuMW5nNyJ9.qu5ZJnDmwGDotCR0dYGiwg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates, // starting position [lng, lat]
    zoom: 12 // starting zoom
    });
const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<h4>${title}</h4><p>Exact location will be provided after booking</p>`))
    .addTo(map);