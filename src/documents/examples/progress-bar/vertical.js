YUI().use('aui-progressbar', function (Y) {
  new Y.ProgressBar({
    boundingBox: '#myProgressBar',
    height: 200,
    label: '60%',
    orientation: 'vertical',
    value: 60,
    width: 30
  }).render();
});