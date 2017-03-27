from django.shortcuts import render, redirect, HttpResponse
import random
import time

# Create your views here.

def getgold(request):
    gold = {
    'farm': random.randint(10, 20),
    'cave': random.randint(5, 10),
    'house': random.randint(2, 5),
    'casino': random.randint(-50, 50),
    'time' : time.strftime('%Y/%m/%d - %I:%M %p').lower()
    }

    if request.POST['building'] == 'farm':
        request.session['gold'] += gold['farm']
        log = {'message': "You earned " + str(gold['farm']) + " golds from working in the farm! (" + str(gold['time']) + ")", 'color':"green"}
    elif request.POST['building'] == 'cave':
        request.session['gold'] += gold['cave']
        log = {'message': "You found " + str(gold['cave']) + " golds inside the cave! (" + str(gold['time']) + ")", 'color': "green"}
    elif request.POST['building'] == 'house':
        request.session['gold'] += gold['house']
        log = {'message': "You earned " + str(gold['house']) + " golds from cleaning the house! (" + str(gold['time']) + ")", 'color': "green"}
    elif request.POST['building'] == 'casino':
        request.session['gold'] += gold['casino']
        log = {'message': "You tried your luck at the casino and won " + str(gold['casino']) + " golds... Sweet!! (" + str(gold['time']) + ")", 'color': "green"}
        if gold['casino'] < 0:
            log = {'message': "You tried your luck at the casino and lost " + str(gold['casino']) + " golds... Ouch... (" + str(gold['time']) + ")", 'color': "red"}

    request.session['message'].append(log)
    return redirect('/')

def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'message' not in request.session:
        request.session['message'] = []
    return render(request, 'ninjagold/index.html')

def resetting(request):
    del request.session['gold']
    del request.session['message']
    return redirect('/')
