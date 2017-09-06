AUI().use(
  'aui-audio',
  function(A) {
    new A.Audio(
      {
        boundingBox: '#myAudio',
        url: 'https://alloyui.com/audio/zelda.mp3'
      }
    ).render();
  }
);