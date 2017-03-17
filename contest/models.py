from __future__ import unicode_literals
from jsonfield import JSONField
from  djgeojson.fields import PointField
from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=100)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Choice(models.Model):
    choice_text = models.CharField(max_length=100)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='qs' )
    children = models.ForeignKey(Question, blank=True, null=True, on_delete=models.CASCADE, related_name='chi' )
    name = models.CharField(max_length=100)
    tooltip = models.CharField(max_length=500, blank=True, null=True)
    leaf = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

class cform(models.Model):
    date = models.DateField(blank=True)
    tname = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    postal = models.CharField(max_length=100, blank=True)
    mdelivery = models.CharField(max_length=200, blank=True)
    deposittotal = models.IntegerField(blank=True)
    lname = models.CharField(max_length=100, blank=True)
    laddress = models.CharField(max_length=100, blank=True)
    lcity = models.CharField(max_length=100, blank=True)
    lpostal = models.CharField(max_length=100, blank=True)


    def __str__(self):
        return self.address


class advocates(models.Model):
    category = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    walkins = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    schedule = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    url = models.CharField(max_length=500)
    note = models.CharField(max_length=500)
    lon = models.FloatField()
    lat = models.FloatField()
    geometry = PointField(blank=True, null=True)

    def __str__(self):
        return self.name
