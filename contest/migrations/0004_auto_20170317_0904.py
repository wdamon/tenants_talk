# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2017-03-17 16:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0003_advocates'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advocates',
            name='lat',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='advocates',
            name='lon',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='advocates',
            name='schedule',
            field=models.CharField(max_length=200),
        ),
    ]
