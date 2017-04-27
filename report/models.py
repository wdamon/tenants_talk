from __future__ import unicode_literals
from django.db import models
from jsonfield import JSONField
from  djgeojson.fields import PointField

CATEGORIES = (
    ('EVC', 'Eviction'),
    ('SEC', 'Security Deposits'),
    ('REP', 'Repairs'),
    ('OTH', 'Other'),
)

class Eviction(models.Model):
    category = models.CharField(max_length=3, choices=CATEGORIES)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    province = models.CharField(max_length=100)
    postal = models.CharField(max_length=100)
    evictdate = models.DateField()
    evictreason = models.CharField(max_length=1000)
    lat = models.FloatField()
    lon = models.FloatField()
    geom = PointField()

    def __str__(self):
        return self.address
