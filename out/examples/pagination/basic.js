YUI().use('aui-pagination', function(Y) {

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

});s