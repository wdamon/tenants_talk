from django.template import RequestContext
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, render_to_response
from django.urls import reverse
import json
from .forms import ReportForm
from report.models import Eviction
from django.views.generic.edit import FormView
from django.views.generic import TemplateView
from djgeojson.views import GeoJSONLayerView
from django.core.serializers import serialize
from djgeojson.serializers import Serializer as GeoJSONSerializer


def index(request):
    return render(request, 'report/index.html')

def points_view(request):
    evc_serialized = serialize("geojson", Eviction.objects.all())
    return HttpResponse(evc_serialized)

def map(request):
    evc_serialized = GeoJSONSerializer().serialize(Eviction.objects.all(), use_natural_keys=True, with_modelname=False)
    return render(request, 'report/map.html', {'evc_serialized':evc_serialized})

def map2(request):
    return render(request, 'report/map2.html')

def form(request):
    form = ReportForm()
    form.fields['evictreason'].widget.attrs['maxlength']= '500'
    return render(request, 'report/form.html', {'form':form})

def post_report(request):

    form = ReportForm(request.POST)
    if form.is_valid():
        form.save()
        return HttpResponseRedirect('/report/map/')

    else:
        print form.errors

def advocates(request):
    return(request, 'report/advocates.html')

class MapLayer(GeoJSONLayerView):
    #Options
    precision = 4
    simplify = 0.5
