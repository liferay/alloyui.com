AUI().use('aui-io-request', function (A) {

  A.io.request('data/content.html', {

    on: {
      success: function() {
        var data = this.get('responseData');
        alert(data);
      }
    }

  });

});