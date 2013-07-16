var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  events: {
    'click #add':   'addBook',
  },

  initialize: function (initialBooks) {
    this.$list = this.$('#book-list');
    this.books = new app.Library();

    this.listenTo(this.books, 'reset', this.render);
    this.listenTo(this.books, 'add', this.renderBook);

    this.books.fetch({reset: true});

  },

  render: function () {
    this.books.each(function (book) {
      this.renderBook(book);
    }, this);
    return this;
  },

  renderBook: function (book) {
    var bookView = new app.BookView({model: book});
    this.$list.append(bookView.render().el);
  },

  addBook: function (e) {
    e.preventDefault();

    var formData = {};

    $('#addBook div').children('input').each(function (i, el) {
      var val = $(el).val();
      if ( val != '') {
        formData[el.id] = val;
      }
    });

    this.books.create(formData, {wait: true});
  },

});
