import geocoder

def address_to_latlng(address, return_address = False):
    g = geocoder.google()
    try:
        #TODO: not really replace, geocode should use unicode strings
        address = address.encode('ascii', 'replace')
        place, latlng = g.geocode(address)
    except Exception as e:
        raise ValidationError(_(u"Incorrect location provided"))
    point = 'POINT(%f %f)' % tuple(reversed(latlng))
    if return_address:
        return (place, point)
    return point
