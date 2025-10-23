document.addEventListener("DOMContentLoaded", function () {
  /* data for map */
  let jhStatueLatLng = [42.374474, -71.117207];
  let nwBuildingLatLng = [42.3795462, -71.1156024];
  let zoomLevel = 15;

  /* create Leaflet map object, 
place in container, 
and set initial center and zoom */
  let map = L.map("map_container").setView(jhStatueLatLng, zoomLevel);

  /* required attribution */
  let attributionHtml =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  /* create tile layer with attribution */
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: attributionHtml,
  }).addTo(map);

  /* create marker, info popup, and add to map */
  L.marker(jhStatueLatLng)
    .bindPopup("John Harvard Statue - 'The Statue of Three Lies'")
    .addTo(map);

  L.marker(nwBuildingLatLng)
    .bindPopup("Northwest Building - 'Whale Building'")
    .addTo(map);
});
