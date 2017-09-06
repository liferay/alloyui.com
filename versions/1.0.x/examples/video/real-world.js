AUI().use(
  'aui-video',
  function(A) {
    new A.Video(
      {
        boundingBox: '#myVideo',
        fixedAttributes: {
          allowfullscreen: 'true'
        },
        height: 368,
        ogvUrl: 'https://videos.liferay.com/lifecasts/portal/6.0/106.ogv',
        poster: '/video/poster.png',
        swfUrl: 'https://videos.liferay.com/common/player.swf',
        url: 'https://videos.liferay.com/webinars/2010-08-11.mp4',
        width: 640
      }
    ).render();
  }
);