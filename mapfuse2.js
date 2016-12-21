<script>
var emap = {};

emap.load = function(args){

var m  = L.map('mapid').setView([49.251624, -123.081344], 11);

var mopt = {
    url:'https://api.tiles.mapbox.com/v4/wdamon.1c70m0jc/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid2RhbW9uIiwiYSI6InFVV1VLMFUifQ.2Zx0T9w01EK6E-v76-z85Q',
    options: {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'}
};

var mq=L.tileLayer(mopt.url,mopt.options);

mq.addTo(m);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.evictreason) {
      layer.bindPopup(emap.popupContent(feature.properties));
      if (markers)
        layer.addTo(markers)
      if(args.searchable) {
        feature.layer = layer;
        layer.addTo(map);
      }
    }
  };

var geojsonPointLayer = {{ evc_serialized|safe }};

var markers = (!args.searchable ? L.markerClusterGroup().addTo(m) : "");
if (args.searchable)
   L.control.fuseSearch().addTo(m)
    .indexFeatures(geojsonPointLayer, ['address', 'evictreason']);

var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    markers.addLayer(L.geoJson(geojsonPointLayer, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    }))
    m.addLayer(markers);
}
    emap.popupContent = function (props) {
      var result = ""
      result += props.address ? "<br><em>" + props.address + "</em>" : ""
      result += props.evictreason ? "<br>" + props.remarks : ""
      return result
    };
  emap.searchable = (location + "").search('mapMode=searchable') >= 0
   emap.load({
     containerID: 'map',
     searchable: emap.searchable
   });
</script>
