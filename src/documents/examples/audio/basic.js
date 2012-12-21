AUI().use('aui-audio', function(A) {

  var audio = new A.Audio({
    boundingBox: '#demo',
    url: 'http://liferay.github.com/alloyui.com/audio/zelda.mp3'
  }).render();

});