AUI().use('aui-progressbar', function(A) {

  var progressBar = new A.ProgressBar({
    boundingBox: '#myProgressBarContainer',
    contentBox: '.myProgressBar',
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