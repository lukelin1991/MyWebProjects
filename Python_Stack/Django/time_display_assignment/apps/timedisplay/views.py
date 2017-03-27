from django.shortcuts import render
import datetime

# Create your views here.

def index(request):
    now = datetime.datetime.now()
    print now
    context = {
    "time":now
    }
    return render(request, 'timedisplay/page.html', context)
