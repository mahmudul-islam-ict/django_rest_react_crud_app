from django.db import models

# Create your models here.

class Article(models.Model):
	title = models.CharField(max_length=100, blank=True, default='')
	description = models.TextField()
	author = models.CharField(max_length=80, blank=True)
	created = models.DateTimeField(auto_now_add=True)


	class Meta:
		ordering = ['created']


	def __str__(self):
		return self.title
