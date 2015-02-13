var doc = $(document);

doc.ready(
	function() {
		var navbar = $('.navbar-fixed-top'),
		navDropdown = $('#navDropdown'),
		versionDropdown = $('#version');

		navDropdown.click(
			function() {
				showDropdown(navDropdown);
				showDropdown(navbar);
			}
		);

		versionDropdown.click(
			function() {
				showDropdown(versionDropdown);
			}
		);

		doc.click(
			function(e) {
				if (!$(e.target).closest(navDropdown).length) {
					navDropdown.removeClass('show');
					navbar.removeClass('show');
				}

				if (!$(e.target).closest(versionDropdown).length) {
					versionDropdown.removeClass('show');
				}
			}
		);

		var showDropdown = function(targetNode) {
			targetNode.toggleClass('show');
		};
	}
)