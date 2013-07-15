AUI().use(
  'aui-nested-list',
  function(A) {
    var placeholder = A.Node.create('<li class="placeholder"></li>');

    new A.NestedList(
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