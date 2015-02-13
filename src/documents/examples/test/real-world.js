AUI().use(
  'aui-test',
  function(A) {
    var test = new A.test(
      {
        boundingBox: '#myTest',
        height: '200',
        mode: 'javascript',
        value: 'alert("Write something here...");',
        width: '700'
      }
    ).render();

    var mode = A.one('#mode');

    if (mode) {
      var contents = {
        javascript: 'alert("Write something here...");',
        json: '{"value": "Write something here..."}',
        php: '<?php echo "Write something here..."; ?>',
        xml: '<value attr="something">Write something here...</value>'
      };

      var currentMode = 'javascript';

      var updateValue = function() {
        test.set('value', contents[currentMode]);
      };

      mode.on(
        'change',
        function(event) {
          currentMode = this.val();
          test.set('mode', currentMode);
          updateValue();
        }
      );
    }
  }
);