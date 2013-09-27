YUI().use(
  'aui-video',
  function(Y) {
    var video = new Y.Video(
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

    Y.one('#play-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        video.play();
      }
    );

    Y.one('#pause-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        video.pause();
      }
    );

    Y.one('#change-video-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        video.pause();
        video.set('ogvUrl', 'http://alloyui.com/video/movie.ogv');
        video.set('url', 'http://alloyui.com/video/movie.mp4');
        video.load();
        video.play();
      }
    );
  }
);