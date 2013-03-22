YUI().use('aui-sortable-layout', function (Y) {
  new Y.SortableLayout({
    dragNodes: '.portlet',
    dropNodes: '#mySortableLayout'
  });
});