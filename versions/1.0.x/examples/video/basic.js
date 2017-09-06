AUI().use(
  'aui-video',
  function(A) {
    new A.Video(
      {
        boundingBox: '#myVideo',
        ogvUrl: '/video/movie.ogg',
        url: '/video/movie.mp4'
      }
    ).render();
  }
);