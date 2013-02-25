YUI().use(
  'aui-sortable-list',
  function(Y) {
    var placeholder = Y.Node.create('<li class="placeholder"></li>');

    new Y.SortableList(
      {
        dropCondition: function(event) {
          return true;
        },
        dropOn: 'myList',
        nodes: '#myList li',
        placeholder: placeholder
      }
    );
  }
);