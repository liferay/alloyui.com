AUI().ready('aui-char-counter', function(A) {

  var charCounter = new A.CharCounter({
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