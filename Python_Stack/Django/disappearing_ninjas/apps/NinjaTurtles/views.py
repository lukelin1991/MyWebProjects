from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
    return render(request, "tmnt/index.html")

def allninjas(request):
    context = {
        "name" : "Teenage Mutant Ninja Turtles",
        "image" : "images/tmnt.png"
    }
    return render(request, "tmnt/results.html", context)

def  showninja(request, color):
    ninja_color = color.lower()
    print ninja_color
    if ninja_color == "blue":
        ninja_name = 'Leonardo'
        ninja_image = 'images/leonardo.jpg'
    elif ninja_color == "red":
        ninja_name = 'Raphael'
        ninja_image = 'images/raphael.jpg'
    elif ninja_color == "purple":
        ninja_name = 'Donatello'
        ninja_image = 'images/donatello.jpg'
    elif ninja_color == "orange":
        ninja_name = 'Michelangelo'
        ninja_image = 'images/michelangelo.jpg'
    else:
        ninja_name = "sorry, not a ninja"
        ninja_image ="images/notapril.jpg"

    context = {
        "name" : ninja_name,
        "image" : ninja_image
    }
    return render(request, "tmnt/results.html", context)
