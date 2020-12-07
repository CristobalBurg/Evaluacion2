from django.contrib import admin
from .models import Heroe



# Register your models here.

class HeroeAdmin(admin.ModelAdmin):
    list_display = ('nombre','alias','superpoder')

admin.site.register(Heroe)

