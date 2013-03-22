YUI().use('aui-char-counter', function (Y) {
  new Y.CharCounter({
    counter: '#myCounter',
    input: '#myTextarea',
    maxLength: 140,
    on: {
      maxLength: function (event) {
        alert('The max length limit was reached');
      }
    }
  });
});