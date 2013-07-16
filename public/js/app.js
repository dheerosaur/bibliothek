var app = app || {};

$(function () {

  var initialBooks = [
    {title: 'Animal Farm', author: 'George Orwell', keywords: ['novella', 'govt']},
    {title: '1984', author: 'George Orwell', keywords: ['novella', 'govt']},
    {title: 'The Metamorphosis', author: 'Franz Kafka', keywords: ['novella', 'metaphor']},
    {title: 'Siddhartha', author: 'Herman Hesse', keywords: ['novella', 'bildungsroman']}
  ]

  new app.LibraryView(initialBooks);

});
