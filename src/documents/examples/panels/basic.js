AUI().ready('aui-panel', function(A) {

  var dummyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod.';

  var regularPanel = new A.Panel({
    collapsible: true,
    headerContent: 'Regular Panel',
    bodyContent: dummyText
  }).render('#regularPanel');

  var nestedPanels = new A.Panel({
    collapsible: true,
    headerContent: 'Nested Panels'
  }).render('#nestedPanels');

  var childPanel1 = new A.Panel({
    collapsible: true,
    headerContent: 'Child 1',
    bodyContent: dummyText
  }).render(nestedPanels.bodyNode);

  var childPanel2 = new A.Panel({
    collapsible: true,
    headerContent: 'Child 2',
    bodyContent: dummyText
  }).render(nestedPanels.bodyNode);

});