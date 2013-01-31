// Create an AUI instance and load the 'aui-node' module
AUI().use('aui-node', function(A) {

  // Select the node(s) using a css selector string
  var nodes = A.all('.accordion .title');

  // Clicking a node will set it as exclusively `active`
  nodes.on('click', function(event) {
    nodes.removeClass('active');
    event.target.addClass('active');
  });

});