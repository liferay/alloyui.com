YUI().use('aui-pagination', 'aui-io-request', function(Y) {

  var content = Y.one('.myContent');

  new Y.Pagination({
    containers: '.myPagination',
    total: 4,
    maxPageLinks: 4,
    circular: true,
    pageLinkContent: function(pageEl, pageNumber) {
      pageEl.html('Page ' + pageNumber);
    },
    on: {
      changeRequest: function(event) {
        var newState = event.state;

        Y.io.request('data/html-' + newState.page + '.html', {
          on: {
            success: function() {
              var data = this.get('responseData');

              content.html(data);
            }
          }
        });

        this.setState(newState);
      }
    }
  }).render();

});