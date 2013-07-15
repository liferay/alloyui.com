AUI().use('node', 'node-focusmanager', function (A) {

  var doc = A.one(document),
      version = A.one('#version'),
      versionDropdown = A.one('#version-dropdown');

  version.on('click', function(e) {
    versionDropdown.toggleClass('show');
    e.preventDefault();
    e.stopPropagation();
  });

  doc.on('click', function() {
    versionDropdown.removeClass('show');
  });

});