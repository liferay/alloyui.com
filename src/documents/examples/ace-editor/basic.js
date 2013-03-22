YUI().use('aui-ace-editor', function (Y) {
  new Y.AceEditor({
    boundingBox: '#myEditor',
    height: '200',
    value: 'Write something here...',
    width: '700'
  }).render();
});