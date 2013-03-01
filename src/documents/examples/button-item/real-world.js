AUI().use(
  'aui-button-item',
  function(A) {
    new A.ButtonItem(
      {
        icon: 'info',
        render: '#buttons',
        title: 'click this for an alert',
        handler: function() {
          alert('Here is some info, triggered by an aui button!');
        }
      }
    );
  }
);