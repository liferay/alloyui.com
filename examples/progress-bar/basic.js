AUI().ready('aui-progressbar', function(A) {

  var progressBar = new A.ProgressBar({
    boundingBox: '#progressBar',
    contentBox: '.pbar',
    label: 'Ready to load',
    value: '0',
    on: {
      complete: function(e) {
        this.set('label', 'Complete!');
      }
    }
  }).render();

  A.one('.load').on('click', function() {
    progressBar.set('value', 100);
  });
});