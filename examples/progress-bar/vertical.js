YUI().use('aui-progressbar', function(Y) {

  new Y.ProgressBar({
    boundingBox: '#myProgressBar',
    orientation: 'vertical',
    label: '60%',
    value: 60,
    width: 30,
    height: 200
  }).render();

});