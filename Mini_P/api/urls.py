from django.urls import path
from .views import NombreModeloCreateView,NombreModeloRDA


urlpatterns = [
    path("nombreModelo/",NombreModeloCreateView.as_view()),
    path("nombreModelo/<int:pk>/",NombreModeloRDA.as_view()),
 
]
