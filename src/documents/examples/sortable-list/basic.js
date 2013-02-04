AUI().use('aui-sortable-list', function(A) {

  var placeholder = A.Node.create('<li class="placeholder"></li>');

  new A.SortableList({
    nodes: '#myList li',
    dropCondition: function(event) {
      return true;
    },
    dropOn: 'myList',
    placeholder: placeholder,
  });

});