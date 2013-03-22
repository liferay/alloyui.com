YUI().use('aui-video', function (Y) {
  new Y.Video({
    boundingBox: '#myVideo',
    ogvUrl: 'http://alloyui.com/video/movie.ogg',
    url: 'http://alloyui.com/video/movie.mp4'
  }).render();
});