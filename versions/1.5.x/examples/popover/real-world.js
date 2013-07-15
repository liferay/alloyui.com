YUI().use(
  'aui-popover',
  'widget-anim',
  function(A) {
    var triggerAnim = A.one('#triggerAnim');

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

    var triggerFoot = A.one('#triggerFoot');

    var popoverFoot = new A.Popover(
      {
        align: {
          node: triggerFoot,
          points:[A.WidgetPositionAlign.LC, A.WidgetPositionAlign.RC]
        },
        bodyContent: 'Body Content',
        footerContent: 'Footer content',
        headerContent: 'Header content',
        position: 'right'
      }
    ).render();

    triggerFoot.on(
      'click',
      function() {
        popoverFoot.set('visible', !popoverFoot.get('visible'));
      }
    );
  }
);