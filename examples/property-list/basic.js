AUI().use(
  'aui-property-list',
  function(A) {
    var properties = [
      {name: 'Fruit', value: 'Strawberry'},
      {name: 'Veggie', value: 'Broccoli'}
    ];

    new A.PropertyList(
      {
        recordset: properties
      }
    ).render('#myPropertyList');
  }
);