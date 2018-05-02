from django.urls import path
from login.views import *

urlpatterns = [
    path('login/', login),
    path('', index),
]
