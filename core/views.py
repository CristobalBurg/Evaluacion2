from django.shortcuts import render, redirect
from django.urls import reverse
from django.core.mail import EmailMessage
from .forms import ContactForm
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
def formulario(request):
    contact_form = ContactForm()
    if request.method == 'POST':
        contact_form = ContactForm(data=request.POST)
        if contact_form.is_valid():
            name = request.POST.get('name','')
            email = request.POST.get('email','')
            mensaje = request.POST.get('mensaje','')
            

            #Crear email
            email = EmailMessage(
                "Los Avengers!: has sido citado a salvar el mundo",
                "de {} <{}> \n\n Escribió: \n\n{}".format(name,email,mensaje),
                'no-contestar@inbox.mailtrap.io',
                ["geoese.burgos@gmail.com"],
                reply_to=[email]
            )  
            try:
                email.send()
                return redirect(reverse('form') + '?OK')
            except:
                return redirect(reverse('form') + '?FAIL')


            return redirect(reverse('form') + '?OK')
    return render(request,"core/formulario.html",{"form":contact_form})

def heroeCard(request):
    heroes = Heroe.objects.all()
    return render(request,"core/heroeCard.html",{'heroes':heroes})