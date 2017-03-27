from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    if request.method != "POST":
        request.session['counter']=1
        generate_pass = get_random_string(length = 14)
        request.session['generate_string'] = generate_pass
    else:
        request.session['counter'] += 1
        request.session['generate_string'] = get_random_string(length = 14)
    return render(request, 'randomword/index.html')

def reset(request):
    request.session.clear()
    return redirect('/')
