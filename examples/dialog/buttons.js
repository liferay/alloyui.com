AUI().use('aui-dialog', function(A) {

  var myButtons = [
    {
      label: 'Change title',
      handler: function() {
        this.set('title', 'New dialog title');
      }
    },
    {
      label: 'Change body',
      handler: function() {
        this.set('bodyContent', 'New body content');
      }
    }
  ];

  var dialog = new A.Dialog({
    bodyContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Dialog title',
    buttons: myButtons,
    centered: true
 }).render();

});