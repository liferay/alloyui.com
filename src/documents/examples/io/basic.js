YUI().use('aui-io-request', function (Y) {

  Y.io.request('data/content.html', {

    on: {
      success: function() {
        var data = this.get('responseData');
        alert(data);
      }
    }

  });

});