YUI().use(
  'aui-popover',
  function(Y) {
    var trigger = Y.one('#myPopover');

    var popover = new Y.Popover(
      {
        align: {
          node: trigger,
          points:[Y.WidgetPositionAlign.BC, Y.WidgetPositionAlign.TC]
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