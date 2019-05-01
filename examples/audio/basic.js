YUI().use(
  'aui-audio',
  function(Y) {
    new Y.Audio(
      {
        boundingBox: '#myAudio',
        url: 'https://alloyui.com/audio/zelda.mp3',
        oggUrl: 'https://alloyui.com/audio/zelda.ogg'
      }
    ).render();
  }
);