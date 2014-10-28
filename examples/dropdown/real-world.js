YUI().use(
  'aui-dropdown',
  function(Y) {
    new Y.Dropdown(
      {
        boundingBox: '#myDropdown',
        trigger: '#myTrigger',
        hideOnClickOutSide: false,
        hideOnEsc: true,
        open: true
      }
    ).render();
  }
);