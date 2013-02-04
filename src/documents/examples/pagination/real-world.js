AUI().use('aui-pagination', function(A) {

  var pages = A.all('.content div');

  new A.Pagination({
    boundingBox: '#pagination',
    contentBox: '#pagination .aui-pagination-content',
    circular: false,
    page: 1,
    on: {
      changeRequest: function(event) {
        var instance = this,
            state = event.state,
            lastState = event.lastState;

        if (lastState) {
            pages.item(lastState.page - 1).setStyle('display', 'none');
        }
        pages.item(state.page - 1).setStyle('display', 'block');
      }
    }
  }).render();

});