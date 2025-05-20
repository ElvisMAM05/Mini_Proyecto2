from django.db import models

# Create your models here.
class NombreModelo(models.Model):
    Nombre = models.CharField(max_length=10)
    fecha = models.DateField(auto_now_add=True)
    precio= models.IntegerField()
    stock= models.IntegerField()
    
