AUI().ready('aui-paginator', function(A) {

  var items = A.all('.item');

  var paginator = new A.Paginator({
    containers: '.paginator',
    total: 10,
    maxPageLinks: 10,
    circular: false,
    rowsPerPage: 1,
    rowsPerPageOptions: [1, 3, 5, 7],
    on: {
      changeRequest: function(event) {
        var newState = event.state;
        var page = newState.page;

        this.setState(newState);

        var lastPage = newState.before && newState.before.page;

        if (lastPage) {
          A.all('.page' + lastPage).setStyle('display', 'none');
        }

        var rowsPerPage = newState.rowsPerPage;

        items.each(function(item, index, collection) {
          var itemOnPage = Math.floor((index - 1) / rowsPerPage) + 1;

          item.addClass('page' + itemOnPage);
        });

        var currentPageNumber = event.state.page;

        A.all('.page' + currentPageNumber).setStyle('display', 'block');
      }
    }
  }).render();

});