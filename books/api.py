from tastypie.resources import ModelResource

from .models import Book


class BookResource(ModelResource):

    class Meta:
        queryset = Book.objects.all()
        resource_name = 'books'
