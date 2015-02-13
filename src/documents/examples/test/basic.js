AUI().use(
  'aui-test',
  function(A) {
    new A.Test(
      {
        boundingBox: '#myTest',
        height: '200',
        value: 'Write something here...',
        width: '700'
      }
    ).render();
  }
);