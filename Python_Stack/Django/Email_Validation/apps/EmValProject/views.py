from django.shortcuts import render, redirect
from .models import EmailEntry
from django.contrib import messages
from django.core.urlresolvers import reverse

# Create your views here.
def add(request):
    results = EmailEntry.objects.create_email(request.POST)
    if results[0] == True:
        request.session['email'] = results[1].email
        return redirect(reverse('i_succeeded'))
    else:
        for err in results[1]:
            messages.error(request, err)
        return redirect(reverse('my_index'))

def index(request):
    return render(request, "EmValProject/index.html")

def succeeded(request):
    email_all = EmailEntry.objects.all()
    context = {
    "results": email_all
    }
    return render(request, "EmValProject/succeeded.html", context)
