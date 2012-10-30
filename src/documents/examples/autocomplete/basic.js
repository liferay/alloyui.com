AUI().use('aui-autocomplete', function(A) {

  var continents = ['America', 'Europe', 'Asia', 'Africa', 'Oceania', 'Antarctica'];

  var autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete',
    dataSource: continents
  }).render();

});