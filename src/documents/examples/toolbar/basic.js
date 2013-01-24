AUI().ready('aui-toolbar', function(A) {

  var toolbar = new A.Toolbar(
    {
      activeState: true,
      children: [
        {
          label: 'Add'
        },
        {
          label: 'Remove'
        },
        {
          label: 'Config'
        }
      ]
    }
  ).render('#myToolbarContainer');

});