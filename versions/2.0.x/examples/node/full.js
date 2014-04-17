// Create an AUI instance and load the 'aui-node' module
YUI().use(
  'aui-node',
  function(Y) {
    var text = 'The quick brown fox jumps over the lazy dog.';
    var centered = false;
    var selectable = true;
    var demo = Y.one('#demo');
    var holder = Y.one('#contentHolder');

    // Create and Append button makes a new box
    Y.one('#populate').on(
      'click',
      function() {
        Y.Node.create('<div class="mini"><p>'+text+'</p></div>').appendTo(holder);
      }
    );

    // Empty button clears all boxes
    Y.one('#empty').on(
      'click',
      function() {
        holder.empty();
        holder.setStyle('position', 'static');
      }
    );

    // Toggle button hides and displays boxes
    Y.one('#toggle').on(
      'click',
      function() {
        var boxes = Y.all('.mini');
        boxes.toggle();
      }
    );

    // Selectable button turns selectability on and off
    Y.one('#select').on(
      'click',
      function() {
        if (!selectable) {
          holder.selectable();
          selectable = true;
        }
        else {
          holder.unselectable();
          selectable = false;
        }
      }
    );
  }
);