AUI().ready('aui-nested-list', function(A) {

  var placeholder = A.Node.create('<li class="placeholder-test"></li>');

  var list = new A.NestedList({
    nodes: '#demo li',
    dropCondition: function(event) {
      return true;
    },
    dropOn: 'ol',
    placeholder: placeholder,
  });

});