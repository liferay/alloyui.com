AUI().ready('aui-char-counter', function(A) {

  var cc1 = new A.CharCounter({
    input: '#input1',
    counter: '#counter1',
    maxLength: 10,
    on: {
      maxLength: function(event) {
        alert('The max length limit was reached');
      }
    }
  });

});