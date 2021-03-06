# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2017-03-17 05:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import djgeojson.fields


class Migration(migrations.Migration):

    initial = True

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
        migrations.CreateModel(
            name='cform',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(blank=True)),
                ('tname', models.CharField(blank=True, max_length=100)),
                ('address', models.CharField(blank=True, max_length=100)),
                ('city', models.CharField(blank=True, max_length=100)),
                ('postal', models.CharField(blank=True, max_length=100)),
                ('mdelivery', models.CharField(blank=True, max_length=200)),
                ('deposittotal', models.IntegerField(blank=True)),
                ('lname', models.CharField(blank=True, max_length=100)),
                ('laddress', models.CharField(blank=True, max_length=100)),
                ('lcity', models.CharField(blank=True, max_length=100)),
                ('lpostal', models.CharField(blank=True, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Choice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('choice_text', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('tooltip', models.CharField(blank=True, max_length=500, null=True)),
                ('leaf', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_text', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='choice',
            name='children',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='chi', to='contest.Question'),
        ),
        migrations.AddField(
            model_name='choice',
            name='question',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='qs', to='contest.Question'),
        ),
    ]
