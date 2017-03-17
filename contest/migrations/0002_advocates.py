# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2017-03-17 05:35
from __future__ import unicode_literals

from django.db import migrations, models
import djgeojson.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='advocates',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('walkins', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=100)),
                ('schedule', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=100)),
                ('url', models.CharField(max_length=500)),
                ('note', models.CharField(max_length=500)),
                ('lon', models.FloatField()),
                ('lat', models.FloatField()),
                ('geometry', djgeojson.fields.PointField(blank=True, null=True)),
            ],
        ),
    ]
