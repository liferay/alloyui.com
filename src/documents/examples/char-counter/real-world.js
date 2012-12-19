AUI().ready('aui-char-counter', function(A) {

  var cc1 = new A.CharCounter({
    input: '#input1',
    counter: '#counter1',
    maxLength: 10,
    on: {
      maxLength: function(event) {
        alert('The max length was reach');
      }
    }
  });

  var cc2 = new A.CharCounter({
    input: '#input2',
    counter: '#counter2',
    maxLength: 20
  });

  var cc3 = new A.CharCounter({
    input: '#input3',
    counter: '#counter3',
    maxLength: 255
  });

  A.on('click', function() { cc2.set('maxLength', 10); }, '#button2-1');
  A.on('click', function() { cc2.set('maxLength', 20); }, '#button2-2');

});