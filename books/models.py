from django.db import models
from jsonfield import JSONField


class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    releaseDate = models.DateTimeField(blank=True, null=True)
    keywords = JSONField(default='[]')

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = 'book'
        verbose_name_plural = 'books'
