AUI().use('aui-textboxlist', function(A) {

  var continents = ['America', 'Europe', 'Asia', 'Africa', 'Oceania', 'Antarctica'];

  new A.TextboxList({
    contentBox: '#myList',
    dataSource: continents,
    width: 600
  }).render();

});