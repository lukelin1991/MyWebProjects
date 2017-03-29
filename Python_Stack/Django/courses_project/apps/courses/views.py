from django.shortcuts import render, HttpResponse, redirect
from .models import Course
# Create your views here.

def index(request):
    context = {
    "names": Course.objects.all()
    }
    return render(request, "courses/index.html", context)

def add(request):
    Course.objects.create(name=request.POST['name'], description=request.POST['description'])
    return redirect('courses:index')

def destroy(request, id):
    context = {
    "item": Course.objects.filter(id=id)
    }
    return render(request, "courses/destroy.html", context)

def delete(request, itemnum):
    Course.objects.filter(id=itemnum).delete()
    return redirect('courses:index')
