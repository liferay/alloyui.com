YUI().use('aui-datatable', 'datatable-sort', 'aui-datatype', function (Y) {
  var remoteData = [{
    name: 'John A. Smith',
    address: '1236 Some Street',
    city: 'San Francisco',
    state: 'CA',
    amount: 5,
    active: 'yes',
    colors: ['red'],
    fruit: ['banana', 'cherry'],
    last_login: '4/19/2007'
  }, {
    name: 'Bob C. Uncle',
    address: '9996 Random Road',
    city: 'Los Angeles',
    state: 'CA',
    amount: 0,
    active: 'maybe',
    colors: ['green'],
    fruit: ['cherry'],
    last_login: ['4/10/2007']
  }, {
    name: 'John D. Smith',
    address: '1623 Some Street',
    city: 'San Francisco',
    state: 'CA',
    amount: 5,
    active: 'yes',
    colors: ['red'],
    fruit: ['cherry'],
    last_login: '4/19/2007'
  }, {
    name: 'Joan E. Jones',
    address: '3217 Another Ave',
    city: 'New York',
    state: 'NY',
    amount: 3,
    active: 'no',
    colors: ['red', 'blue'],
    fruit: ['apple', 'cherry'],
    last_login: '2/15/2006'
  }, {
    name: 'Bob F. Uncle',
    address: '9899 Random Road',
    city: 'Los Angeles',
    state: 'CA',
    amount: 0,
    active: 'maybe',
    colors: ['green'],
    fruit: ['banana'],
    last_login: '1/23/2004'
  }, {
    name: 'John G. Smith',
    address: '1723 Some Street',
    city: 'San Francisco',
    state: 'CA',
    amount: 5,
    active: 'yes',
    colors: ['red'],
    fruit: ['apple'],
    last_login: '4/19/2007'
  }, {
    name: 'Joan H. Jones',
    address: '3241 Another Ave',
    city: 'New York',
    state: 'NY',
    amount: 3,
    active: 'no',
    colors: ['red', 'blue'],
    fruit: ['kiwi'],
    last_login: '2/15/2006'
  }, {
    name: 'Bob I. Uncle',
    address: '9909 Random Road',
    city: 'Los Angeles',
    state: 'CA',
    amount: 0,
    active: 'maybe',
    colors: ['green'],
    fruit: ['apple', 'banana'],
    last_login: '1/23/2004'
  }, {
    name: 'John J. Smith',
    address: '1623 Some Street',
    city: 'San Francisco',
    state: 'CA',
    amount: 5,
    active: 'yes',
    colors: ['red'],
    fruit: ['apple', 'cherry'],
    last_login: '4/19/2007'
  }, {
    name: 'Joan K. Jones',
    address: '3721 Another Ave',
    city: 'New York',
    state: 'NY',
    amount: 3,
    active: 'no',
    colors: ['red', 'blue'],
    fruit: ['banana'],
    last_login: '2/15/2006'
  }];

  var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  var nameEditor = new Y.TextAreaCellEditor({
    validator: {
      rules: {
        name: {
          email: true,
          required: true
        }
      }
    }
  });

  var fruitEditor = new Y.DropDownCellEditor({
    editable: true,
    multiple: true,
    options: {
      apple: 'Apple',
      banana: 'Banana',
      cherry: 'Cherry',
      kiwi: 'Kiwi'
    },
    validator: {
      rules: {
        value: {
          required: true
        }
      }
    }
  });

  var nestedCols = [{
    editor: nameEditor,
    key: 'name',
    sortable: true
  }, {
    editor: new Y.TextAreaCellEditor(),
    key: 'address',
    sortable: true
  }, {
    editor: new Y.TextAreaCellEditor(),
    key: 'city'
  }, {
    editor: new Y.DropDownCellEditor({
      editable: true,
      options: states
    }),
    key: 'state'
  }, {
    editor: new Y.TextCellEditor({
      inputFormatter: Y.DataType.String.evaluate,
      validator: {
        rules: {
          value: {
            number: true,
            required: true
          }
        }
      }
    }),
    key: 'amount'
  }, {
    editor: new Y.RadioCellEditor({
      editable: true,
      options: {
        yes: 'Yes',
        no: 'No',
        maybe: 'Maybe'
      }
    }),
    key: 'active'
  }, {
    editor: new Y.CheckboxCellEditor({
      editable: true,
      multiple: true,
      options: {
        red: 'Red',
        green: 'Green',
        blue: 'Blue'
      }
    }),
    key: 'colors'
  }, {
    editor: new Y.DateCellEditor({
      calendar: {
        dateFormat: '%m/%d/%Y',
        selectionMode: 'multiple',
        showNextMonth: false,
        showPrevMonth: false,
        width: '250px'
      },
      validator: {
        rules: {
          value: {
            required: true
          }
        }
      }
    }),
    key: 'last_login'
  }, {
    editor: fruitEditor,
    key: 'fruit'
  }];

  var dataTable = new Y.DataTable({
    columns: nestedCols,
    data: remoteData,
    editEvent: 'dblclick',
    plugins: [{
      cfg: {
        highlightRange: false
      },
      fn: Y.Plugin.DataTableHighlight
    }]
  }).render('#myDataTable');

  dataTable.get('boundingBox').unselectable();
});