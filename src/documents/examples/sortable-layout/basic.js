AUI().use('aui-sortable-layout', function(A) {

  new A.SortableLayout({
    dragNodes: '.portlet',
    dropNodes: '#mySortableLayout'
  });

});