AUI().ready('aui-textboxlist', function(A) {

  var continents = ['America', 'Europe', 'Asia', 'Africa', 'Oceania', 'Antarctica'];

  new A.TextboxList({
    contentBox: '#demo',
    dataSource: continents,
    width: 600
  }).render();

});