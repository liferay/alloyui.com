YUI().use('node', 'node-focusmanager', function (Y) {

  var doc = Y.one(document),
      version = Y.one('#version'),
      versionDropdown = Y.one('#version-dropdown');

  version.on('click', function(e) {
    versionDropdown.toggleClass('aui-show');
    e.preventDefault();
    e.stopPropagation();
  });

  doc.on('click', function() {
    versionDropdown.removeClass('aui-show');
  });

});