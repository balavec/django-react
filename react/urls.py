from django.conf.urls import url
from react import views


urlpatterns = [
    url(r'^$', views.home, name='home'),
]
