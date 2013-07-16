var app = app || {};

app.BookView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click .delete': 'deleteBook'
  },

  className: 'bookContainer pure-u-1-3',

  template: _.template( $('#bookTemplate').html() ),

  initialize: function () {
  },

  render: function () {
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  },

  deleteBook: function () {
    this.model.destroy();
    this.remove();
  }

});
