from __future__ import unicode_literals

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
    category = models.CharField(max_length=100)
    tname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    laddress = models.CharField(max_length=100)
    lcity = models.CharField(max_length=100)
    lpostal = models.CharField(max_length=100)
    deposittotal = models.IntegerField()
    faddress = models.CharField(max_length=100)
    fcity = models.CharField(max_length=100)
    fprovince = models.CharField(max_length=100)
    fpostal = models.CharField(max_length=100)

    def __str__(self):
        return self.address
