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

    class Meta:
        model = cform
        fields = ['date', 'tname', 'address', 'city', 'postal', 'deposittotal', 'mdelivery', 'lname', 'laddress', 'lcity', 'lpostal']
        labels = {'date': ('Date'), 'tname': ('Your First and Last Name'), 'address': ('Your Current Address'), 'city': ('Your Current City'), 'postal': ('Your Current Postal Code'), 'mdelivery': ('Describe how you are giving this letter to your landlord (i.e email, in person, etc)'), 'deposittotal': ('The Total Amount of Your Security Deposit'), 'lname': ('Your Landlord&#39;s Name'), 'laddress': ('Your Landlord&#39;s Address'), 'lcity': ('Your Landlord&#39;s Current City'), 'lpostal': ('Your Landlord&#39;s Current Postal Code') }
        widgets = {'date': forms.DateInput(attrs={'id': 'datetimepicker12'})}
