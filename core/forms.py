from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(label="Nombre",min_length=5, max_length=100, required=True)
    email = forms.EmailField(label="Email", min_length=5 , required=True)
    mensaje = forms.CharField(label="Mensaje", max_length=300, required=True, widget=forms.Textarea())