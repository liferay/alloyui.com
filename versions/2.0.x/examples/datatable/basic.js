YUI().use(
  'aui-datatable',
  function(Y) {
    var columns = ['name', 'address', 'city', 'state'];

    var data = [
      {address: '1236 Some Street', city: 'San Francisco', name: 'John A. Smith', state: 'CA'},
      {address: '3271 Another Ave', city: 'New York', name: 'Joan B. Jones', state: 'NY'},
      {address: '9996 Random Road', city: 'Los Angeles', name: 'Bob C. Uncle', state: 'CA'},
      {address: '1623 Some Street', city: 'San Francisco', name: 'John D. Smith', state: 'CA'},
      {address: '9899 Random Road', city: 'Los Angeles', name: 'Bob F. Uncle', state: 'CA'}
    ];

    new Y.DataTable.Base(
      {
        columnset: columns,
        recordset: data
      }
    ).render('#myDataTable');
  }
);