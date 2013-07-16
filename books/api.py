import json

from tastypie.resources import ModelResource
from tastypie.authorization import Authorization

from .models import Book


class BookResource(ModelResource):

    class Meta:
        queryset = Book.objects.all()
        authorization = Authorization()
        always_return_data = True
        resource_name = 'books'

    def dehydrate_keywords(self, bundle):
        json_str = json.dumps(bundle.obj.keywords)
        return json.loads(json_str)
