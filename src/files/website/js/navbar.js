$(document).ready(
	function() {
		var navbar = $('.navbar-fixed-top'),
		win = $(window);

		win.on('scroll mousewheel',
			function() {
				var winPos = win.scrollTop(),
				scrollClass = $('.nav-opacity');

				if (winPos === 0 && scrollClass.length) {
					navbar.removeClass('nav-opacity');
				}
				else if (winPos > 0 && !scrollClass.length) {
					navbar.addClass('nav-opacity');
				}
			}
		);
	}
);