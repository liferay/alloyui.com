AUI().use('aui-textboxlist', function (A) {
  var states = [['AK', 'Alaska', 'The Land of the Midnight Sun'], ['CA', 'California', 'The Golden State'], ['ME', 'Maine', 'The Pine Tree State']];

  new A.TextboxList({
    contentBox: '#myList',
    dataSource: states,
    matchKey: 'name',
    schema: {
      resultFields: ['key', 'name', 'description']
    },
    typeAhead: true,
    width: 600
  }).render();
});