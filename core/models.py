from django.db import models

# Create your models here.
class Heroe(models.Model):
    nombre = models.CharField(verbose_name="nombre", max_length=50)
    alias = models.CharField(verbose_name="alias", max_length=50)
    imagen = models.ImageField(verbose_name="imagen", upload_to='Heroes', height_field=None, width_field=None, max_length=None)
    logo = models.ImageField(verbose_name="logo", upload_to='Heroes', height_field=None, width_field=None, max_length=None)
    superpoder = models.CharField(verbose_name="superpoder", max_length=50)
    comic = models.CharField(verbose_name="comic", max_length=50)
    pelicula = models.CharField(verbose_name="pelicula", max_length=50)
    raza =  models.CharField(verbose_name="raza", max_length=50)
    estado = models.CharField(verbose_name="estado", max_length=50)

    class Meta:
        verbose_name="Heroe"
        verbose_name_plural ="Heroes"

    def __str__(self):
        return self.nombre