AUI().ready('aui-video', function(A) {

	var component = new A.Video(
		{
		    boundingBox: '#demo',
		    width: 640,
		    height: 368,
		    url: 'http://videos.liferay.com/webinars/2010-08-11.mp4',
		    ogvUrl: 'http://videos.liferay.com/lifecasts/portal/6.0/106.ogv',
		    // swfUrl: 'http://videos.liferay.com/common/player.swf',
		    poster: 'assets/sample-jpg.jpg',
		    fixedAttributes: {
		        allowfullscreen: 'true'
		    }
		}
	).render();

});