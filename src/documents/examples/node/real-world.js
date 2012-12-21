AUI().use('node', function(A) {

  var node = A.all('.accordion .title');

  node.on('click', function(e) {

    A.all('.accordion .title').removeClass('active');
    
    e.target.addClass('active');

  });

});