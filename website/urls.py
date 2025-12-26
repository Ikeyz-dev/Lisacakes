from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('menu/', views.menu),
    path('about/', views.about),
    path('contact/', views.contact),
]