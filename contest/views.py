from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from django.views import generic
from contest.models import Question, Choice, advocates
from contest.forms import CForm
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from djgeojson.views import GeoJSONLayerView
from django.core.serializers import serialize
from djgeojson.serializers import Serializer as GeoJSONSerializer
from django.shortcuts import render_to_response
from django.template import RequestContext
import json

def contest(request):
    return render(request, 'contest/contest.html')

def landing(request):
    return render(request, 'contest/landing.html')

def petition(request):
    return render(request, 'contest/petition.html') 

def question(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    choices = Choice.objects.filter(question=question_id)
    context = {'choices': choices, 'question': question}
    return render(request, 'contest/question.html', context)

class ResultsView(generic.DetailView):
    model = Question
    template_name = 'contest/results.html'

def choose(request, question_name):
    return HttpResponse("")

def formletter(request, page_slug):

    if page_slug == 'report':
        return HttpResponseRedirect('/report/form')
    else:
        form = CForm
        page_slug = 'contest/fletter/' + page_slug +'.html'

        bytes = page_slug.encode('utf-8')

        return render(request, bytes, {'form':form})

def arb(request):
    walkins = advocates.objects.filter(walkins__iexact='yes')
    arb_serialized = serialize('geojson', walkins, geometry_field='geometry')
    advocateList = advocates.objects.all()
    return render(request, 'contest/fletter/arb.html', {'arb_serialized':arb_serialized, 'advocates':advocateList})

def filter(request):
    checked = request.GET.getlist('checked[]');
    #should receive a list of id's for checked filters. then
    filteredAdvocates = []

    if "walkins" in checked:
        filteredAdvocates = advocates.objects.exclude(walkins__iexact="no").exclude(category__in=checked).values()
    else:
        filteredAdvocates = advocates.objects.exclude(category__in=checked).values()

    return JsonResponse({'results':list(filteredAdvocates)})
