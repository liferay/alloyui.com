AUI().ready(
  'aui-progressbar',
  function(A) {
    var progressBar = new A.ProgressBar(
      {
        boundingBox: '#myProgressBarContainer',
        contentBox: '.myProgressBar',
        label: 'Ready to load',
        on: {
          complete: function(e) {
            this.set('label', 'Complete!');
          }
        },
        value: '0'
      }
    ).render();

    A.one('.load').on(
      'click',
      function() {
        progressBar.set('value', 100);
      }
    );
  }
);