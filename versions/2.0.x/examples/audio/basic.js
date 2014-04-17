YUI().use(
  'aui-audio',
  function(Y) {
    new Y.Audio(
      {
        boundingBox: '#myAudio',
        url: 'http://alloyui.com/audio/zelda.mp3',
        oggUrl: 'http://alloyui.com/audio/zelda.ogg'
      }
    ).render();
  }
);