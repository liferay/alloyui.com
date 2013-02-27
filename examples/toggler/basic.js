AUI().use(
  'aui-toggler',
  function(A) {
    new A.Toggler(
      {
        container: '#myToggler',
        content: '.content',
        expanded: false,
        header: '.header'
      }
    );
  }
);