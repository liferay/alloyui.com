YUI().use(
  'aui-scrollspy',
  function(Y) {
    new Y.Scrollspy(
      {
        scrollNode: '#myScrollNode',
        target: '#myNavbar'
      }
    );
  }
);