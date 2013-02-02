AUI().ready('aui-aria', 'aui-dialog', 'aui-overlay-manager', 'dd-constrain', function(A) {

  A.one('#createNew').on('click', function() {

    var dialog = new A.Dialog({
      bodyContent: 'Testing body',
      title: 'Dialog',
      centered: true,
      width: 500,
      height: 250
    }).render();

    dialog.plug(A.Plugin.IO, {
      autoLoad: false,
      uri: 'http://liferay.github.com/dialog/content.html'
    });

    dialog.io.start();

  });

});