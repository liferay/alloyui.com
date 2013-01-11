AUI().use('aui-loading-mask', 'aui-io-request', function(A) {

  var demo = A.one('#demo');

  var imageContainer = A.one('#ioContent');

  demo.plug(A.LoadingMask, {
    background: '#000',
    strings: {
      loading: 'Loading image...'
    }
  });

  var loadingMask = demo.loadingmask;

  var showMask = function() {
    loadingMask.show();
  };

  var hideMask = function() {
    loadingMask.hide();
  };

  var request = A.io.request(
    'data/content1.html', {
      dataType: 'html',
      autoLoad: false,
      cache: false,
      timeOut: 1000,
      on: {
        start: function() {
          showMask();
        },
        success: function() {
          var data = this.get('responseData');
          imageContainer.html(data);
        }
      },
      after: {
        end: function() {
          //setTimeout method used to delay hideMask until image is fully displayed
          setTimeout ( function() {
            var image = A.one('.image');
            if (image) {
              hideMask();
            }
          }, 1500);
        }
      }
    }
  );

  var loadImage = function() {
    showMask();

    var pageSelect = A.one('.ioSelect');
    var pageNumber = pageSelect.val();

    request.set('uri', 'data/content' + pageNumber + '.html');

    request.start();
  };

  request.start();

  A.one('#reload').on('click', function() {
    loadImage();
  });

});