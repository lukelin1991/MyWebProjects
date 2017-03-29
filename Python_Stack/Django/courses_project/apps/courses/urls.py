from django.conf.urls import url
from . import views

app_name = "courses"
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add$', views.add, name='add'),
    url(r'^destroy/(?P<id>\d+)$', views.destroy, name='destroy'),
    url(r'^delete/(?P<itemnum>\d+)$', views.delete, name='delete')
]
