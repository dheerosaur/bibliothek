var app = app || {};

app.Library = Backbone.Collection.extend({
  model: app.Book,

  url: app.apiUrl + "books/",

  parse: function (response) {
    return response.objects;
  }
});
