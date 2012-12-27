AUI().use('aui-toggler', function(A) {

  var togglerDelegate = new A.TogglerDelegate({
    animated: true,
    closeAllOnExpand: true,
    container: '#togglerDelegate1',
    content: '.content',
    expanded: false,
    header: '.header',
    transition: {
      duration: .2,
      easing: 'cubic-bezier'
    }
  });
});