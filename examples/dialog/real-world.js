AUI().use(
  'aui-aria',
  'aui-dialog',
  'aui-overlay-manager',
  'dd-constrain',
  function(A) {
    A.one('#createNew').on(
      'click',
      function() {
        var dialog = new A.Dialog(
          {
            bodyContent: 'Testing body',
            centered: true,
            height: 250,
            title: 'Dialog',
            width: 500
          }
        ).render();

        dialog.plug(
          A.Plugin.IO,
          {
            autoLoad: false,
            uri: 'data/content.html'
          }
        );

        dialog.io.start();
      }
    );
  }
);