from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from django.views import generic
from contest.models import Question, Choice
from contest.forms import CForm
from django.http import HttpResponseRedirect, HttpResponse


def contest(request):
    return render(request, 'contest/contest.html')

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
    """I should give people a timeline and some instruction before the form. So you click
    the link in the decision tree and it puts you on a leaf. Here you see the timeline
    I.E 1. Fill out the form below. 2. Mail this letter to your landlord, 3. Wait X days, 3. Do something else.
    Option to email the letter and get email reminders of next steps."""
    if page_slug == 'report':
        return HttpResponseRedirect('/report/')

    else:
        form = CForm(page_slug)
        page_slug = 'contest/fletter/' + page_slug
        return render(request, page_slug, {'form':form})
