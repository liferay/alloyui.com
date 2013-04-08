YUI().use(
  'aui-video',
  function(Y) {
    new Y.Video(
      {
        boundingBox: '#myVideo',
        fixedAttributes: {
          allowfullscreen: 'true'
        },
        height: 368,
        ogvUrl: 'http://videos.liferay.com/lifecasts/portal/6.0/106.ogv',
        poster: 'http://alloyui.com/video/poster.png',
        swfUrl: 'http://videos.liferay.com/common/player.swf',
        url: 'http://videos.liferay.com/webinars/2010-08-11.mp4',
        width: 640
      }
    ).render();
  }
);