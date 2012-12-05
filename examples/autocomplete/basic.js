AUI().use('aui-autocomplete', function(A) {

  var continents = ['America', 'Europe', 'Asia', 'Africa', 'Oceania', 'Antarctica'],

  autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete',
    dataSource: continents
  }).render();

});