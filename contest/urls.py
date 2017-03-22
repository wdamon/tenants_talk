from django.conf.urls import url
from . import views

app_name= 'contest'
urlpatterns = [
    url(r'^$', views.contest, name='contest'),
    url(r'^(?P<question_id>[0-9]+)/$', views.question, name='question'),
    url(r'^(?P<question_id>[0-9]+)/results/$', views.ResultsView.as_view(), name='results'),
    url(r'^(?P<question_id>[0-9]+)/choose/$', views.choose, name='choose'),
    url(r'^fletter/arb', views.arb, name='arb'),
    url(r'^fletter/(?P<page_slug>[\w]+)/$', views.formletter, name='formletter'),
    url(r'^landing/$', views.landing, name='landing'),
    url(r'^filter/$', views.filter, name="filter")
    ]
