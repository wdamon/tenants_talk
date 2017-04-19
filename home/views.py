from django.shortcuts import render
from django.template import RequestContext

def home(request):
    return render(request, 'home/index.html')

def about(request):
	return render(request, 'home/about.html')