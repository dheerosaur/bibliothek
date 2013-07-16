var app = app || {};

app.Book = Backbone.Model.extend({

  defaults: {
    coverImage: app.defaultCover,
    title: 'No title',
    author: 'Unknown',
    releaseDate: null,
    keywords: []
  },

});
