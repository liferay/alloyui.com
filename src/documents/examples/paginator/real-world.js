AUI().ready('aui-paginator', 'aui-io-request', function(A) {

  var content = A.one('.myContent');

  new A.Paginator({
    containers: '.myPaginator',
    total: 4,
    maxPageLinks: 4,
    circular: true,
    pageLinkContent: function(pageEl, pageNumber) {
      pageEl.html('Page ' + pageNumber);
    },
    on: {
      changeRequest: function(event) {
        var newState = event.state;

        A.io.request('data/html-' + newState.page + '.html', {
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