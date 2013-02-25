YUI().use(
  'aui-progressbar',
  function(Y) {
    new Y.ProgressBar(
      {
        boundingBox: '#myProgressBar',
        label: '40%',
        max: 100,
        min: 0,
        on: {
          complete: function(e) {
            this.set('label', 'Complete!');
          },
          valueChange: function(e) {
            this.set('label', e.newVal + '%');
          }
        },
        value: 40,
        width: 700
      }
    ).render();
  }
);