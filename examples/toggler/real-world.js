AUI().use(
  'aui-toggler',
  function(A) {
    new A.TogglerDelegate(
      {
        animated: true,
        closeAllOnExpand: true,
        container: '#togglerDelegate1',
        content: '.content',
        expanded: false,
        header: '.header',
        transition: {
          duration: 0.2,
          easing: 'cubic-bezier'
        }
      }
    );
  }
);