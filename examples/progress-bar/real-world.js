YUI().ready('aui-progressbar', function(Y) {

  new Y.ProgressBar({
    boundingBox: '#myProgressBar',
    label: '40%',
    min: 0,
    max: 100,
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
  }).render();

});