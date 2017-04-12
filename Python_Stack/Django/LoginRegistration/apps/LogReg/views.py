from django.shortcuts import render, redirect
from .models import Register
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'LogReg/index.html')

def register(request):
    valid, message, info = Register.objects.register(request.POST)
    print valid, message
    if not valid:
        for error in message:
            messages.error(request, error)
        return redirect('/')
    print request.POST['first_name']
    context = {
        "user" : request.POST['first_name'],
    }
    return render(request, 'LogReg/success.html', context)

def login(request):
    valid, message, info = Register.objects.login(request.POST)
    print valid, message
    if not valid:
        for error in message:
            messages.error(request, error)
        return redirect('/')
    context = {
        "user" : info,
    }
    return render(request, 'LogReg/success.html', context)
