// Create an AUI instance and load the 'aui-node' module
AUI().use('aui-node', function(A) {

  var text = 'The quick brown fox jumps over the lazy dog.';
  var centered = false;
  var selectable = true;
  var demo = A.one('#demo');
  var holder = A.one('#contentHolder');

  // Create and Append button makes a new box
  A.one('#populate').on('click', function() {
    A.Node.create('<div class="mini"><p>'+text+'</p></div>').appendTo(holder);
  });

  // Empty button clears all boxes
  A.one('#empty').on('click', function() {
    holder.empty();
    holder.setStyle('position', 'static');
  });

  // Toggle button hides and displays boxes
  A.one('#toggle').on('click', function() {
    var boxes = A.all('.mini');
    boxes.toggle();
  });

  // Center button centers the boxes
  A.one('#center').on('click', function() {
    if (!centered) {
      holder.center(demo);
      centered = true;
    }
    else {
      holder.setStyle('position', 'static');
      centered = false;
    }
  });

  // Selectable button turns selectability on and off
  A.one('#select').on('click', function() {
    if (!selectable) {
      holder.selectable();
      selectable = true;
    }
    else {
      holder.unselectable();
      selectable = false;
    }
  });

});