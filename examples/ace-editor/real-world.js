YUI().use('aui-ace-editor', function(Y) {

  var editor = new Y.AceEditor({
    boundingBox: '#myEditor',
    mode: 'javascript',
    value: 'alert("Write something here...");',
    width: '700',
    height: '200'
  }).render();

  var mode = Y.one('#mode');

  if (mode) {

    var updateEditor = Y.one('#updateEditor');

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