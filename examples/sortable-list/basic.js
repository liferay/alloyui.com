YUI().use('aui-sortable-list', function(Y) {

  var placeholder = Y.Node.create('<li class="placeholder"></li>');

  new Y.SortableList({
    nodes: '#myList li',
    dropCondition: function(event) {
      return true;
    },
    dropOn: 'myList',
    placeholder: placeholder,
  });

});