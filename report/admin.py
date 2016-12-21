from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin
from .models import Eviction


admin.site.register(Eviction, LeafletGeoAdmin)
