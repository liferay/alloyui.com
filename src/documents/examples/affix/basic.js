YUI().use(
  'aui-affix',
  function(Y) {
    new Y.Affix({
      target: '#myAffix',
      offsetTop: 200
    });
  }
);