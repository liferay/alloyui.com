YUI().use('aui-dropdown', 'node', function(Y) {
    var docsToggle = Y.one('.dropdown-toggle');
    var docsCollapse = Y.one('.dropdown-collapse');

    docsToggle.on('click', function(e) {
        docsCollapse.toggleClass('collapse');

        e.preventDefault();
        e.stopPropagation();
    });

    new Y.Dropdown({
        contentBox: '.dropdown-menu',
        trigger: '.dropdown-toggle',
        render: true
    });
});
