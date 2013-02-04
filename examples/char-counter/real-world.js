YUI().use('aui-char-counter', function(Y) {

  new Y.CharCounter({
    input: '#myTextarea',
    counter: '#myCounter',
    maxLength: 140,
    on: {
      maxLength: function(event) {
        alert('The max length limit was reached');
      }
    }
  });

});