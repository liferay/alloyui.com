YUI().use('aui-toggler', function(Y) {

  new Y.Toggler({
    container: "#myToggler",
    content: ".content",
    header: ".header",
    expanded: false
  });

});