YUI().use(
  'aui-char-counter',
  function(Y) {
    new Y.CharCounter(
      {
        counter: '#myCounter',
        input: '#myInput',
        maxLength: 10
      }
    );
  }
);