AUI().use('aui-audio', function(A) {

  new A.Audio({
    boundingBox: '#myAudio',
    url: 'http://alloyui.com/audio/zelda.mp3'
  }).render();

});