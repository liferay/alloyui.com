AUI().ready('aui-panel', function(A) {

  var postTitle = A.one('#postTitle');

  var postContent = A.one('#postContent');

  var info = 'Click the edit button to change the content of the post to what is written in Post Content.';

  var createPanel = function() {

    var today = new Date();

    var newPanel = new A.Panel({
      collapsible: true,
      headerContent: postTitle.val(),
      bodyContent: postContent.val(),
      footerContent: 'Written on ' + today,
      icons: [
        {
          icon: 'pencil',
          id: 'pencil',
          handler: function(event, panel) {
            newPanel.set('bodyContent', postContent.val());
          }
        },
        {
          icon: 'close',
          id: 'close',
          handler: function(event) {
            if (confirm('Are you sure you want to delete this blog post?')) {
              newPanel.hide();
            }
          }
        }
      ]
    }).render('#newPanels');

    //Adding a button after the panel has been created
    newPanel.icons.add({
      id: 'info',
      icon: 'info',
      handler: function() {
        alert(info);
      }
    });
  };

  A.one('#createPost').on('click', function() {
    createPanel();
  });

});