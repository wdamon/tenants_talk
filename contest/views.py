from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from django.views import generic
from contest.models import Question, Choice, advocates
from contest.forms import CForm
from django.http import HttpResponseRedirect, HttpResponse
from djgeojson.views import GeoJSONLayerView
from django.core.serializers import serialize
from djgeojson.serializers import Serializer as GeoJSONSerializer

def contest(request):
    return render(request, 'contest/contest.html')

def landing(request):
    return render(request, 'contest/landing.html')

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
    return render(request, 'contest/fletter/arb.html', {'arb_serialized':arb_serialized})

def filter(request):
    filter_val = request.GET.get('filter', None);

    if (filter_val != None):
        results = []
        advocates = advocates.objects.filter(category_icontains=filter_val)
        for advocate in advocates:
            json = {'name': advocates.name}
            results.append(json)

        return JsonResponse({'results':results})
    else:
        return render(request, 'search.html');
