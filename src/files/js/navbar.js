YUI().use('aui-dropdown', 'node', function(Y) {
    var dropdown = Y.one('.dropdown');
    var dropdownToggle = Y.one('.dropdown-toggle');

    var navbarToggle = Y.one('.navbar-toggle');
    var navbarCollapse = Y.one('.navbar-collapse');

    dropdownToggle.on('click', function(e) {
        if (navbarToggle.hasClass('active')) {
            navbarToggle.toggleClass('active');
        }

        e.preventDefault();
        e.stopPropagation();
    });

    navbarToggle.on('click', function(e) {
        if (dropdown.hasClass('open')) {
            dropdown.toggleClass('open');
        }

        this.toggleClass('active');
        navbarCollapse.toggleClass('collapse');

        e.preventDefault();
        e.stopPropagation();
    });

    new Y.Dropdown({
        boundingBox: '.dropdown',
        contentBox: '.dropdown-menu',
        trigger: '.dropdown .dropdown-toggle',
        render: true
    });
});
