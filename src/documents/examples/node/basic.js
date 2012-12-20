AUI().use('aui-node', function(A) {
	var node = A.one('.toggleColor');
	node.on('click', function() {
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		node.setStyle('background', '#' + randomColor);
	});
});