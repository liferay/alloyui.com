// Create an AUI instance and load the 'aui-node' module
YUI().use(
  'aui-node',
  function(Y) {
    // Select the node(s) using a css selector string
    var node = Y.one('#toggleColor');

    // Change the background color on a `click` event
    node.on(
      'click',
      function() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        node.setStyle('background', '#' + randomColor);
      }
    );
  }
);