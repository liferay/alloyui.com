AUI().ready('aui-toolbar', function(A) {
  var component = new A.Toolbar(
    {
      activeState: true,
      children: [
        {label: 'Add'},
        {label: 'Remove'},
        {label: 'Config'}
      ]
    }
  ).render('#toolbar');
});