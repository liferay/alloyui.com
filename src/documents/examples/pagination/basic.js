AUI().use('aui-pagination', function(A) {

  new A.Pagination({
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

  new A.Pagination({
    boundingBox: '#jssmall',
    total: 15
  }).render();

  new A.Pagination({
    boundingBox: '#jsmini',
    total: 15
  }).render();

});s