YUI().use('aui-pagination', function (Y) {
  new Y.Pagination({
    after: {
      changeRequest: function (event) {
        console.log('page:', event.state.page, 'getOffsetPageNumber:', this.getOffsetPageNumber());
      }
    },
    boundingBox: '#jslarge',
    offset: 999,
    page: 1,
    strings: {
      prev: '&laquo;',
      next: '&raquo;'
    },
    total: 5
  }).render();

  new Y.Pagination({
    boundingBox: '#jssmall',
    total: 15
  }).render();

  new Y.Pagination({
    boundingBox: '#jsmini',
    total: 15
  }).render();
});