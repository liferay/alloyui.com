AUI().use('aui-ace-editor', function(A) {

  new A.AceEditor({
    boundingBox: '#myEditor',
    value: 'Write something here...',
    width: '700',
    height: '200'
  }).render();

});