# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-18 22:05
from __future__ import unicode_literals

from django.db import migrations, models
import djgeojson.fields


class Migration(migrations.Migration):

    dependencies = [
        ('report', '0002_auto_20160911_2306'),
    ]

    operations = [
        migrations.DeleteModel(
            name='EvictionPoint',
        ),
        migrations.AddField(
            model_name='eviction',
            name='geom',
            field=djgeojson.fields.PointField(default={'coordinates': [0, 0], 'type': 'Point'}),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='eviction',
            name='lat',
            field=models.DecimalField(decimal_places=6, max_digits=9, null=True),
        ),
        migrations.AlterField(
            model_name='eviction',
            name='lon',
            field=models.DecimalField(decimal_places=6, max_digits=9, null=True),
        ),
    ]
