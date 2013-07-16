var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  events: {
    'click #add':     'addBook',
    'click #save':    'saveEdit',
    'click #cancel':  'cancelEdit'
  },

  initialize: function (initialBooks) {
    this.$list = this.$('#book-list');
    this.books = new app.Library();

    this.listenTo(this.books, 'reset', this.render);
    this.listenTo(this.books, 'add', this.renderBook);
    this.listenTo(this.books, 'edit', this.startEdit);

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

  getFormData: function () {
    var formData = {};
    $('#addBook div').children('input').each(function (i, el) {
      var val = $(el).val();
      if ( val != '') {
        if (el.id == 'releaseDate') {
          val = $('#releaseDate').datepicker('getDate').toISOString();
        } else if (el.id == 'keywords') {
          val = val.split(' ');
        }
        formData[el.id] = val;
      }
    });
    return formData;
  },

  addBook: function (e) {
    e.preventDefault();
    this.books.create(this.getFormData(), {wait: true});
  },

  startEdit: function () {
    var book = app.activeBook;
    this.$('.buttons').addClass('editing');
    this.$('form input#title').val(book.get('title'));
    this.$('form input#author').val(book.get('author'));
  },

  saveEdit: function (e) {
    e.preventDefault();
    app.activeBook.save(this.getFormData());
    app.activeBook.trigger('edit:done');
  },

  cancelEdit: function (e) {
    e.preventDefault()
    app.activeBook = null;
    this.$('form input').val('');
    this.$('.buttons').removeClass('editing');
  }

});
