AUI().use('aui-autocomplete', function (A) {

  var continents = ['America', 'Europe', 'Asia', 'Africa', 'Oceania', 'Antarctica'];

  new A.AutoComplete({
    contentBox: '#myAutoComplete',
    dataSource: continents
  }).render();

});
