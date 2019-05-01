YUI().use(
  'aui-video',
  function(Y) {
    new Y.Video(
      {
        boundingBox: '#myVideo',
        ogvUrl: 'https://alloyui.com/video/movie.ogg',
        url: 'https://alloyui.com/video/movie.mp4'
      }
    ).render();
  }
);