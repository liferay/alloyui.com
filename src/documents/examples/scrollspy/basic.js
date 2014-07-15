YUI().use(
  'aui-scrollspy',
  function(Y) {
    var spy = new Y.Scrollspy({
      scrollNode: '#exampleScrollNode',
      target: '#exampleNavbar'
    });
});