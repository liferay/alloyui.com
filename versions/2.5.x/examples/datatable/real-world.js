YUI().use(
  'aui-datatable',
  'aui-datatype',
  'datatable-sort',
  function(Y) {
    var remoteData = [
      {active: 'yes', address: '1236 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['banana','cherry'], last_login: '4/19/2007', name: 'John A. Smith', state: 'CA'},
      {active: 'maybe', address: '9996 Random Road', amount: 0, city: 'Los Angeles', colors:['green'], fruit:['cherry'], last_login:['4/10/2007'], name: 'Bob C. Uncle', state: 'CA'},
      {active: 'yes', address: '1623 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['cherry'], last_login: '4/19/2007', name: 'John D. Smith', state: 'CA'},
      {active: 'no', address: '3217 Another Ave', amount: 3, city: 'New York', colors:['red','blue'], fruit:['apple','cherry'], last_login: '2/15/2006', name: 'Joan E. Jones', state: 'NY'},
      {active: 'maybe', address: '9899 Random Road', amount: 0, city: 'Los Angeles', colors:['green'], fruit:['banana'], last_login: '1/23/2004', name: 'Bob F. Uncle', state: 'CA'},
      {active: 'yes', address: '1723 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['apple'], last_login: '4/19/2007', name: 'John G. Smith', state: 'CA'},
      {active: 'no', address: '3241 Another Ave', amount: 3, city: 'New York', colors:['red','blue'], fruit:['kiwi'], last_login: '2/15/2006', name: 'Joan H. Jones', state: 'NY'},
      {active: 'maybe', address: '9909 Random Road', amount: 0, city: 'Los Angeles', colors:['green'], fruit:['apple','banana'], last_login: '1/23/2004', name: 'Bob I. Uncle', state: 'CA'},
      {active: 'yes', address: '1623 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['apple','cherry'], last_login: '4/19/2007', name: 'John J. Smith', state: 'CA'},
      {active: 'no', address: '3721 Another Ave', amount: 3, city: 'New York', colors:['red','blue'], fruit:['banana'], last_login: '2/15/2006', name: 'Joan K. Jones', state: 'NY'}
    ];

    var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

    var nameEditor = new Y.TextAreaCellEditor(
      {
        validator: {
          rules: {
            name: {
              email: true,
              required: true
            }
          }
        }
      }
    );

    var fruitEditor = new Y.DropDownCellEditor(
      {
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
      }
    );

    var nestedCols = [
      {
        editor: nameEditor,
        key: 'name',
        sortable: true
      },
      {
        editor: new Y.TextAreaCellEditor(),
        key: 'address',
        sortable: true
      },
      {
        editor: new Y.TextAreaCellEditor(),
        key: 'city'
      },
      {
        editor: new Y.DropDownCellEditor(
          {
            editable: true,
            options: states
          }
        ),
        key: 'state'
      },
      {
        editor: new Y.TextCellEditor(
          {
            inputFormatter: Y.DataType.String.evaluate,
            validator: {
              rules: {
                value: {
                  number: true,
                  required: true
                }
              }
            }
          }
        ),
        key: 'amount'
      },
      {
        editor: new Y.RadioCellEditor(
          {
            editable: true,
            options: {
              yes: 'Yes',
              no: 'No',
              maybe: 'Maybe'
            }
          }
        ),
        key: 'active'
      },
      {
        editor: new Y.CheckboxCellEditor(
          {
            editable: true,
            multiple: true,
            options: {
              red: 'Red',
              green: 'Green',
              blue: 'Blue'
            }
          }
        ),
        key: 'colors'
      },
      {
        editor: new Y.DateCellEditor(
          {
            calendar: {
              selectionMode: 'multiple',
              showNextMonth: false,
              showPrevMonth: false,
              width: '250px'
            },
            dateFormat: '%m/%d/%Y',
            validator: {
              rules: {
                value: {
                  required: true
                }
              }
            }
          }
        ),
        key: 'last_login'
      },
      {
        editor: fruitEditor,
        key: 'fruit'
      }
    ];

    var dataTable = new Y.DataTable(
      {
        columns: nestedCols,
        data: remoteData,
        editEvent: 'dblclick',
        plugins: [
          {
            cfg: {
              highlightRange: false
            },
            fn: Y.Plugin.DataTableHighlight
          }
        ]
      }
    ).render('#myDataTable');

    dataTable.get('boundingBox').unselectable();
  }
);
