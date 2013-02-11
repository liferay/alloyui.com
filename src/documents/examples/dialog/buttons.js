AUI().use(
  'aui-dialog',
  function(A) {
    var myButtons = [
      {
        handler: function() {
          this.set('title', 'New dialog title');
        },
        label: 'Change title'
      },
      {
        handler: function() {
          this.set('bodyContent', 'New body content');
        },
        label: 'Change body'
      }
    ];

    new A.Dialog(
      {
        bodyContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        buttons: myButtons,
        centered: true,
        title: 'Dialog title'
      }
    ).render();
  }
);