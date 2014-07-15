YUI().use(
  'aui-scrollspy',
  function(Y) {
    var ss = new Y.Scrollspy({
      scrollNode: '#exampleScrollNode',
      target: '#exampleNavbar',
      on: {
        activate: function() {
          console.log('Target changed.');
        }
      }
    });
});