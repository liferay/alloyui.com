AUI().ready(
  'aui-paginator',
  'aui-io-request',
  function(A) {
    var content = A.one('.myContent');

    new A.Paginator(
      {
        circular: true,
        containers: '.myPaginator',
        maxPageLinks: 4,
        on: {
          changeRequest: function(event) {
            var newState = event.state;

            A.io.request(
              'data/html-' + newState.page + '.html',
              {
                on: {
                  success: function() {
                    var data = this.get('responseData');

                    content.html(data);
                  }
                }
              }
            );

            this.setState(newState);
          }
        },
        pageLinkContent: function(pageEl, pageNumber) {
          pageEl.html('Page ' + pageNumber);
        },
        total: 4
      }
    ).render();
  }
);