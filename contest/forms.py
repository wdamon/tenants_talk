from django import forms
from .models import cform
import urllib
import json
from decimal import Decimal

CATEGORIES = (
    ('EVC', 'Eviction'),
    ('SEC', 'Security Deposits'),
    ('REP', 'Repairs'),
    ('OTH', 'Other'),
)

class CForm(forms.ModelForm):
    """page_slug tells us the category which tells the form what to display and the
    view what template to use
    """

    forms.ChoiceField(choices=CATEGORIES, required=True)

    class Meta:
        model = cform
        fields = ['category', 'tname', 'lname','laddress', 'lcity', 'lpostal', 'deposittotal', 'faddress', 'fcity', 'fprovince', 'fpostal']
