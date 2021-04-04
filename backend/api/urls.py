from django.urls import path, include
from api import views

urlpatterns = [
	path('articles/',views.article_list),
	path('articles/<int:pk>/', views.article_detail),
	path('auth/', include('rest_framework.urls', namespace='rest_framework'))
]