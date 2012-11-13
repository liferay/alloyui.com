AUI().ready('aui-textboxlist', function(A) {

  var states = [
    ['AK', 'Alaska', 'The Land of the Midnight Sun'],
    ['CA', 'California', 'The Golden State'],
    ['ME', 'Maine', 'The Pine Tree State']
  ];

  var textboxlist = new A.TextboxList({
    contentBox: '#demo',
    dataSource: states,
    schema: {
      resultFields: ['key', 'name', 'description']
    },
    matchKey: 'name',
    typeAhead: true,
    width: 600
  }).render();

});