// To test GET list
jQuery.get('/api/v1/books/', function (data, textStatus, jqXHR) {
  console.log('Get response');
  console.log(data);
  console.log(textStatus);
  console.log(jqXHR);
});


// To test POST list
jQuery.ajax({
  type: 'POST',
  url: '/api/v1/books/',
  data: JSON.stringify({
    'title': '1984',
    'author': 'George Orwell',
    'releaseDate': new Date(1949, 1, 1).toISOString()
  }),
  success: function (data, textStatus, jqXHR) {
    console.log('Post response');
    console.log(data);
    console.log(textStatus);
    console.log(jqXHR);
  },
  contentType: 'application/json'
});


// To test PUT detail
jQuery.ajax({
  type: 'PUT',
  url: '/api/v1/books/1/',
  data: JSON.stringify({
    'title': 'Animal Farm',
    'keywords': ['hello', 'world']
  }),
  success: function (data, textStatus, jqXHR) {
    console.log('Put response');
    console.log(data);
    console.log(textStatus);
    console.log(jqXHR);
  },
  contentType: 'application/json'
});

// To test DELETE detail
jQuery.ajax({
  type: 'DELETE',
  url: '/api/v1/books/1/',
  success: function (data, textStatus, jqXHR) {
    console.log('Delete response');
    console.log(data);
    console.log(textStatus);
    console.log(jqXHR);
  }
});
