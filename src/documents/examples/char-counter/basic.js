AUI().ready(
  'aui-char-counter',
  function(A) {
    new A.CharCounter(
      {
        input: '#myInput',
        counter: '#myCounter',
        maxLength: 10
      }
    );
  }
);