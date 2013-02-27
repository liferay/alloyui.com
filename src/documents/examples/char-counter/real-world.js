AUI().ready(
  'aui-char-counter',
  function(A) {
    new A.CharCounter(
      {
        counter: '#myCounter',
        input: '#myTextarea',
        maxLength: 140,
        on: {
          maxLength: function(event) {
            alert('The max length limit was reached');
          }
        }
      }
    );
  }
);