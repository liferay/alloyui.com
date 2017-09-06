AUI().use(
  'aui-video',
  function(A) {
    new A.Video(
      {
        boundingBox: '#myVideo',
        ogvUrl: 'https://alloyui.com/video/movie.ogg',
        url: 'https://alloyui.com/video/movie.mp4'
      }
    ).render();
  }
);