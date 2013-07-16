from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

from tastypie.api import Api

from books.api import BookResource

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

v1_api = Api(api_name='v1')
v1_api.register(BookResource())

urlpatterns = patterns(
    '',  # First argument to patterns

    url(r'^$',
        TemplateView.as_view(template_name='index.html'),
        name='home'),

    url(r'^api/',
        include(v1_api.urls)),

    # url(r'^bibliothek/', include('bibliothek.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
