from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from django.views import generic
from contest.models import Question, Choice
from contest.forms import CForm
from django.http import HttpResponseRedirect, HttpResponse


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
