from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(label="Nombre",min_length=5, max_length=100, required=True, widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Escribe tu nombre'}))
    email = forms.EmailField(label="Email", min_length=5 , required=True, widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Escribe tu mail'}))
    mensaje = forms.CharField(label="Mensaje", max_length=300, required=True, widget=forms.Textarea(attrs={'class':'form-control','placeholder':'Escribe tu comentario'}))