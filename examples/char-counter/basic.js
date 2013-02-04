YUI().ready('aui-char-counter', function(Y) {

  new Y.CharCounter({
    input: '#myInput',
    counter: '#myCounter',
    maxLength: 10
  });

});