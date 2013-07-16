# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Book'
        db.create_table(u'books_book', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('author', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('releaseDate', self.gf('django.db.models.fields.DateTimeField')(null=True, blank=True)),
            ('keywords', self.gf('jsonfield.fields.JSONField')(default='[]')),
        ))
        db.send_create_signal(u'books', ['Book'])


    def backwards(self, orm):
        # Deleting model 'Book'
        db.delete_table(u'books_book')


    models = {
        u'books.book': {
            'Meta': {'object_name': 'Book'},
            'author': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'keywords': ('jsonfield.fields.JSONField', [], {'default': "'[]'"}),
            'releaseDate': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        }
    }

    complete_apps = ['books']