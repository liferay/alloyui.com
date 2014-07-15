YUI().use(
  'aui-alert',
  function(Y) {
    new Y.Alert({
        destroyOnHide: true,
        render: true,
        srcNode: '#info'
    });

    new Y.Alert({
        closeable: false,
        render: true,
        srcNode: '#danger'
    });

    new Y.Alert({
        animated: true,
        bodyContent: 'Thank You Mario! But Our Princess Is In That Castle!',
        boundingBox: '#warning',
        closeable: true,
        cssClass: 'alert-warning',
        destroyOnHide: false,
        duration: 1,
        render: true
    });
});