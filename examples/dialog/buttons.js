AUI().use(
  'aui-dialog',
  function(A) {
    var myButtons = [
      {
        handler: function() {
          this.set('title', 'New dialog title');
        },
        text: 'Change title'
      },
      {
        handler: function() {
          this.set('bodyContent', 'New body content');
        },
        text: 'Change body'
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