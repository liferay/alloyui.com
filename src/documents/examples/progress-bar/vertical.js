AUI().use('aui-progressbar', function(A) {

  new A.ProgressBar({
    boundingBox: '#myProgressBar',
    orientation: 'vertical',
    label: '60%',
    value: 60,
    width: 30,
    height: 200
  }).render();

});