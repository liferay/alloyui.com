YUI().use('aui-video', function(Y) {

  new Y.Video({
    boundingBox: '#myVideo',
    url: 'http://alloyui.com/video/movie.mp4',
    ogvUrl: 'http://alloyui.com/video/movie.ogg'
  }).render();

});