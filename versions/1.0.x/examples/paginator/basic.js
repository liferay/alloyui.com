AUI().use(
  'aui-paginator',
  function(A) {
    var items = A.all('.item');

    new A.Paginator(
      {
        circular: false,
        containers: '.myPaginator',
        maxPageLinks: 10,
        on: {
          changeRequest: function(event) {
            var newState = event.state;
            var currentPage = newState.page;

            this.setState(newState);

            var lastPage = newState.before && newState.before.page;

            if (lastPage) {
              A.all('.page' + lastPage).setStyle('display', 'none');
            }

            var rowsPerPage = newState.rowsPerPage;

            items.each(function(item, index, collection) {
              item.set('className', 'item');

              var itemOnPage = Math.floor((index) / rowsPerPage) + 1;

              item.addClass('page' + itemOnPage);
            });

            A.all('.page' + currentPage).setStyle('display', 'block');
          }
        },
        rowsPerPage: 1,
        rowsPerPageOptions: [1, 3, 5, 7],
        total: 10
      }
    ).render();
  }
);