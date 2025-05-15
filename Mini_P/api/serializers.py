from rest_framework import serializers
from .models import NombreModelo

class NombreModeloSerializer(serializers.ModelSerializer):
    class Meta:
        model = NombreModelo
        fields = '__all__'