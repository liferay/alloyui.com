YUI().use('aui-pagination', function(Y) {

  var pages = Y.all('.content div');

  new Y.Pagination({
    boundingBox: '#jslarge',
    offset: 999,
    total: 5,
    page: 1,
    strings: {
      prev: '&laquo;',
      next: '&raquo;'
    },
    after: {
      changeRequest: function(event) {
        console.log(
            'page:', event.state.page,
            'getOffsetPageNumber:', this.getOffsetPageNumber());
      }
    }
  }).render();

  new Y.Pagination({
    boundingBox: '#jssmall',
    total: 15
  }).render();

  new Y.Pagination({
    boundingBox: '#jsmini',
    total: 15
  }).render();

  new Y.Pagination({
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