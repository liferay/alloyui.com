$(document).ready(
	function($) {
		var moduleSelect = $('.module-select');

		if (moduleSelect) {
			moduleSelect.change(
				function() {
					var newUrl = $(this).val();

					if (newUrl) {
						document.location.href = newUrl;
					}
				}
			);
		}
	}
);