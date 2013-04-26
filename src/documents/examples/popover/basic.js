YUI().use(
  'aui-popover',
  function(A) {
    var trigger = A.one('#trigger');

    var popover = new A.Popover(
      {
        align: {
            node: trigger,
            points:[A.WidgetPositionAlign.BC, A.WidgetPositionAlign.TC]
        },
        bodyContent: 'Body Content',
        headerContent: 'Header content',
        position: 'top'
      }
    ).render();

    trigger.on(
      'click',
      function() {
        popover.set('visible', !popover.get('visible'));
      }
    );
  }
);