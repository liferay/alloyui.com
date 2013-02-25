AUI().use(
  'aui-autocomplete',
  function (A) {
    var continents = ['Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania'];

    new A.AutoComplete(
      {
        contentBox: '#myAutoComplete',
        dataSource: continents
      }
    ).render();
  }
);