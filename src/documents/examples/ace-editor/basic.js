AUI().ready('aui-ace-editor', function(A) {

  var editor = new A.AceEditor({
    boundingBox: '#myEditor',
    value: 'Write something here...',
    width: '700',
    height: '200'
  }).render();

});