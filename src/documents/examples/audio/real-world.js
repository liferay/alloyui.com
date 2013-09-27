YUI().use(
  'aui-audio',
  function(Y) {
    var audio = new Y.Audio(
      {
        boundingBox: '#myAudio',
        url: 'http://alloyui.com/audio/zelda.mp3',
        oggUrl: 'http://alloyui.com/audio/zelda.ogg'
      }
    ).render();

    Y.one('#play-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        audio.play();
      }
    );

    Y.one('#pause-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        audio.pause();
      }
    );

    Y.one('#change-audio-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        audio.pause();
        audio.set('url', 'http://alloyui.com/audio/bc.mp3');
        audio.set('oggUrl', 'http://alloyui.com/audio/bc.ogg');
        audio.load();
        audio.play();
      }
    );
  }
);