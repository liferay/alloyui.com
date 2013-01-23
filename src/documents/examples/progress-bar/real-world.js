AUI().ready('node', 'aui-progressbar', 'async-queue', 'node-load', function(A) {
  var content = A.one('.content');
  var progressBar, steptask, step, speed, statusBar;
  var loadBut = A.one('.load'); //load button
  var resetBut = A.one('.reset'); //destroy button

  function pbCreate() {
    step = 0;
    //create progressbar
    progressBar = new A.ProgressBar({
      contentBox: '.pbar',
      label: 'Ready to load',
      value: step,
      on: {
        complete: function(e) {
          this.set('label', 'Complete!');
          content.load('assets/content.html');
          statusBar.addClass('complete');
        }
      }
    }).render();
    //get statusbar for candystriping
    statusBar = A.one('.aui-progress-bar-status');
    statusBar.append('<span/>');

    speed = A.one('input').get('value');

   //create progress
    steptask = new A.AsyncQueue({
      fn: function() {
        ++step;
        progressBar.set('label', 'Loading... ' + step + '%');
        progressBar.set('value', step);
      },
      timeout: speed,
      iterations: 100
    });

    //assign load handler
    loadBut.on('click', function() {
      statusBar.addClass('stripes');
      steptask.run();
    });
  }

  function pbDestroy() {
    progressBar.destroy();
    content.placeBefore('<div class="pbar"></div>');
    content.set('innerHTML', '');
  }

  //assign handlers
  resetBut.on('click', function() {
    pbDestroy();
    pbCreate();
  });

  //onload
  pbCreate();
});