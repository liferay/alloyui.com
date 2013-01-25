AUI().use('aui-audio', function(A) {

  new A.Audio({
    boundingBox: '#myAudio',
    url: 'http://liferay.github.com/alloyui.com/audio/zelda.mp3'
  }).render();

});