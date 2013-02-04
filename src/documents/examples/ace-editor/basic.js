YUI().ready('aui-ace-editor', function(Y) {

  new Y.AceEditor({
    boundingBox: '#myEditor',
    value: 'Write something here...',
    width: '700',
    height: '200'
  }).render();

});