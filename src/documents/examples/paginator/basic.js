AUI().ready('aui-paginator', function(A) {

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

        if (newState.before) {
          var lastPage = newState.before.page;

          A.all('.page' + lastPage).setStyle('display', 'none');
        }

        var items = A.all('.item');

        items.set('className', 'item');

        var i = 0;

        items.each(function(item) {
          i++;

          var itemOnPage = Math.floor((i-1) / newState.rowsPerPage) + 1;

          var currentClass = "page" + itemOnPage;

          item.addClass(currentClass);
        });

        var currentPageNumber = event.state.page;

        A.all('.page' + currentPageNumber).setStyle('display', 'block');
      }
    }
  }).render();

});