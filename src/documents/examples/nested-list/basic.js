AUI().ready('aui-nested-list', function(A) {

  var placeholder = A.Node.create('<li class="placeholder"></li>');

  var list = new A.NestedList({
    nodes: '#myList li',
    dropCondition: function(event) {
      return true;
    },
    dropOn: 'myList',
    placeholder: placeholder,
  });

});