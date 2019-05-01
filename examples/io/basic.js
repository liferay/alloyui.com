YUI().use(
  'aui-io-request',
  function (Y) {
    Y.io.request(
      'https://alloyui.com/io/data/content.html',
      {
        on: {
          success: function() {
            var data = this.get('responseData');
            alert(data);
          }
        }
      }
    );
  }
);