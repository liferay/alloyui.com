AUI().ready('aui-ace-editor', function(A) {

  var editor = new A.AceEditor({
    boundingBox: '#myEditor',
    mode: 'javascript',
    value: 'alert("Write something here...");',
    width: '700',
    height: '200'
  }).render();

  var mode = A.one('#mode');

  if (mode) {

    var updateEditor = A.one('#updateEditor');

    var contents = {
      javascript: 'alert("Write something here...");',
      php: '<?php echo "Write something here..."); ?>',
      xml: '<value attr="something">Write something here...</value>',
      json: '{"value": "Write something here..."}'
    };

    var currentMode = 'javascript';

    var updateValue = function() {
      if (updateEditor.attr('checked')) {
        editor.set('value', contents[currentMode]);
      }
    };

    updateEditor.on('change', updateValue);

    mode.on('change', function(event) {
      currentMode = this.val();
      editor.set('mode', currentMode);
      updateValue();
    });

  }

});