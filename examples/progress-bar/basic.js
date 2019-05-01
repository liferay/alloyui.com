YUI().use(
  'aui-progressbar',
  function(Y) {
    new Y.ProgressBar(
      {
        boundingBox: '#myProgressBar',
        value: 70,
        width: 700
      }
    ).render();
  }
);