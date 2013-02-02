AUI().ready('aui-paginator', function(A) {

  var items = A.all('.item');

  new A.Paginator({
    containers: '.myPaginator',
    total: 10,
    maxPageLinks: 10,
    circular: false,
    rowsPerPage: 1,
    rowsPerPageOptions: [1, 3, 5, 7],
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
    }
  }).render();

});