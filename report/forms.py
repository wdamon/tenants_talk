from django import forms
from .models import Eviction
import urllib
import json
from decimal import Decimal

CATEGORIES = (
    ('EVC', 'Eviction'),
    ('SEC', 'Security Deposits'),
    ('REP', 'Repairs'),
    ('OTH', 'Other'),
)

class ReportForm(forms.ModelForm):
    lat = forms.DecimalField(widget=forms.HiddenInput(), initial=123)
    lon = forms.DecimalField(widget=forms.HiddenInput(), initial=123)
    category = forms.ChoiceField(choices=CATEGORIES, required=True)

    class Meta:
        model = Eviction
        fields = ['category', 'address', 'city', 'province', 'postal', 'evictdate', 'evictreason', 'lat', 'lon']
        labels = {'category': ('What best describes your issue?'), 'address': ('Address'), 'city': ('City'), 'province': ('Province'), 'postal': ('Postal Code'), 'evictdate': ('Date'), 'evictreason': ('Description of Events')}
        widgets = {'evictdate': forms.DateInput(attrs={'id': 'datetimepicker12'}), 'evictreason':forms.Textarea(attrs={'rows': 8, 'max_length':'1000'})}

    def save(self, *args, **kwargs):
        location = "%s,%s,%s,%s" % (self.cleaned_data['address'], self.cleaned_data['city'], self.cleaned_data['province'], self.cleaned_data['postal'])
        print location
        lat, lon = self.geocode(location)
        evict = super(ReportForm, self).save(commit=False)
        evict.lat = lat
        evict.lon = lon
        evict.geom = {'type': 'Point', 'coordinates': [lon, lat]}
        evict.save(*args, **kwargs)

    def geocode(self, location):
        location = urllib.quote_plus(location)
        request = "https://maps.googleapis.com/maps/api/geocode/json?address=%s&key=AIzaSyBfALoA4Ig1n2wthbL6A_slTI9AZMhsSQg" % (location)
        response = urllib.urlopen(request)
        data = json.loads(response.read().decode('utf8'))
        print data
        if data['status'] == 'OK':
            lat = data['results'][0]['geometry']['location']['lat']
            lng = data['results'][0]['geometry']['location']['lng']
            return round(float(lat), 6), round(float(lng),6)
