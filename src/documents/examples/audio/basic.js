AUI().use('aui-audio', function(A) {

  new A.Audio({
    boundingBox: '#myAudio',
    url: 'http://alloyui.com/1.7.0/audio/zelda.mp3'
  }).render();

});