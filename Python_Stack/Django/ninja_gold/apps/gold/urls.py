from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process_money$', views.getgold),
    url(r'^reset$', views.resetting)
]
