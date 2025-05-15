from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from .models import NombreModelo
from .serializers import NombreModeloSerializer


# Create your views here.
class NombreModeloCreateView(ListCreateAPIView):
    queryset = NombreModelo.objects.all()
    serializer_class = NombreModeloSerializer

class NombreModeloRDA(RetrieveUpdateDestroyAPIView):
    queryset = NombreModelo.objects.all()
    serializer_class = NombreModeloSerializer