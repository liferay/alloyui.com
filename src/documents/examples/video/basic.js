AUI().ready('aui-video', function(A) {

  new A.Video({
    boundingBox: '#myVideo',
    url: 'http://alloyui.com/video/movie.mp4',
    ogvUrl: 'http://alloyui.com/video/movie.ogg'
  }).render();

});