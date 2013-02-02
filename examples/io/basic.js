AUI().use('aui-io-request', function (A) {

  A.io.request('io/data/content.html', {

    on: {
      success: function() {
        var data = this.get('responseData');
        alert(data);
      }
    }

  });

});