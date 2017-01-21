from django.conf.urls import url
from . import views
from djgeojson.views import GeoJSONLayerView
from .models import Eviction
from .views import MapLayer

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^form/$', views.form, name='report_form'),
    url(r'^points.data/', views.points_view, name='points'),
    url(r'^map/', views.map, name='map'),
    url(r'^form/post_url/$', views.post_report, name='post_report'),
    url(r'^data.geojson$', GeoJSONLayerView.as_view(model=Eviction), name='data'),
    url(r'^advocates/', views.advocates, name='advocates'),
    url(r'^map2/', views.map2, name='map2'),

    ]
