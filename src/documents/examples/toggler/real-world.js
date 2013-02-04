AUI().use('aui-toggler', function(A) {

  new A.TogglerDelegate({
    animated: true,
    closeAllOnExpand: true,
    container: '#myToggler',
    content: '.content',
    expanded: false,
    header: '.header',
    transition: {
      duration: 0.2,
      easing: 'cubic-bezier'
    }
  });

});