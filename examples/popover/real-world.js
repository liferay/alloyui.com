YUI().use(
  'aui-popover',
  'widget-anim',
  function(A) {
    var triggerAnim = A.one('#myPopoverAnim');

    var popoverAnim = new A.Popover(
      {
        align: {
          node: triggerAnim,
          points:[A.WidgetPositionAlign.RC, A.WidgetPositionAlign.LC]
        },
        bodyContent: 'Body Content',
        headerContent: 'Header content',
        plugins: [A.Plugin.WidgetAnim],
        position: 'left'
      }
    ).render();

    triggerAnim.on(
      'click',
      function() {
        popoverAnim.set('visible', !popoverAnim.get('visible'));
      }
    );
  }
);