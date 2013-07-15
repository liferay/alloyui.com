AUI().use(
  'aui-video',
  function(A) {
    new A.Video(
      {
        boundingBox: '#myVideo',
        ogvUrl: 'http://alloyui.com/video/movie.ogg',
        url: 'http://alloyui.com/video/movie.mp4'
      }
    ).render();
  }
);