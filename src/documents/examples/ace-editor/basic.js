AUI().ready('aui-ace-editor', function(A) {
  var editor = new A.AceEditor(
    {
      boundingBox: '#editor',
      value: 'Write something here...'
    }
  ).render();

});