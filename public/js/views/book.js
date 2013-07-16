var app = app || {};

app.BookView = Backbone.View.extend({
  tagName: 'div',

  className: 'bookContainer pure-u-1-3',

  template: _.template( $('#bookTemplate').html() ),

  initialize: function () {
  },

  render: function () {
    return this;
  }

});
