YUI().ready('aui-video', function(Y) {

  new Y.Video({
    boundingBox: '#myVideo',
    url: 'http://videos.liferay.com/webinars/2010-08-11.mp4',
    ogvUrl: 'http://videos.liferay.com/lifecasts/portal/6.0/106.ogv',
    swfUrl: 'http://videos.liferay.com/common/player.swf',
    poster: 'http://alloyui.com/video/poster.png',
    width: 640,
    height: 368,
    fixedAttributes: {
      allowfullscreen: 'true'
    }
  }).render();

});