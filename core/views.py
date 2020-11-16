from django.shortcuts import render
from .models import Heroe

# Create your views here.
def index(request):
    return render(request,"core/index.html")
def thor(request):
    return render(request,"core/Thor.html")
def capitan(request):
    return render(request,"core/CapitanAmerica.html")
def ironman(request):
    return render(request,"core/IronMan.html")
def hulk(request):
    return render(request,"core/hulk.html")
def widow(request):
    return render(request,"core/widow.html")

def heroeCard(request):
    heroes = Heroe.objects.all()
    return render(request,"core/heroeCard.html",{'heroes':heroes})