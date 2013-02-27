AUI().ready(
  'aui-ace-editor',
  function(A) {
    new A.AceEditor(
      {
        boundingBox: '#myEditor',
        height: '200',
        value: 'Write something here...',
        width: '700'
      }
    ).render();
  }
);