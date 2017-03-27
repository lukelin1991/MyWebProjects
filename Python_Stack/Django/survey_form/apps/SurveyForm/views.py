from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    try:
        request.session['counter']
    except:
        request.session['counter'] = 0
    return render(request, 'surveys/index.html')

def process(request):
    if request.method == "POST":
        request.session['alldata'] = request.POST
        request.session['counter'] += 1
        print request.POST
        print request.POST['name']
        return redirect('/result')
    else:
        return redirect('/')

def result(request):
    context = {
        "name" : request.session['alldata']['name'],
        "location" : request.session['alldata']['location'],
        "language" : request.session['alldata']['language'],
        "comment" : request.session['alldata']['comment']
    }
    return render(request, 'surveys/results.html', context)
