<script>
var m  = L.map('mapid').setView([49.251624, -123.081344], 11);
var mopt = {
    url:'https://api.tiles.mapbox.com/v4/wdamon.1c70m0jc/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid2RhbW9uIiwiYSI6InFVV1VLMFUifQ.2Zx0T9w01EK6E-v76-z85Q',
    options: {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'}
  };
var mq=L.tileLayer(mopt.url,mopt.options);

mq.addTo(m);
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.evictreason) {
      layer.bindPopup(feature.properties.evictreason);
      feature.layer = layer;
    }
  };

var geojsonPointLayer = {{ evc_serialized|safe }};
var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
L.geoJson(geojsonPointLayer, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(m);

var searchCtrl = L.control.fuseSearch();
searchCtrl.addTo(m);
searchCtrl.indexFeatures(geojsonPointLayer, ['address', 'evictreason']);
feature.layer = geojsonPointLayer;


</script>
