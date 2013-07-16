var app = app || {};

app.BookView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click .edit': 'editBook',
    'click .delete': 'deleteBook'
  },

  className: 'bookContainer pure-u-1-3',

  template: _.template( $('#bookTemplate').html() ),

  initialize: function () {
    this.listenTo(this.model, 'edit:done', this.render);
  },

  render: function () {
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  },

  editBook: function () {
    app.activeBook = this.model;
    this.model.trigger('edit');
  },

  deleteBook: function () {
    this.model.destroy();
    this.remove();
  }

});
