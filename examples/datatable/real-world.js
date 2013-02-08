YUI().use('aui-datatable', 'datatable-sort', 'aui-datatype', function(Y) {

  var remoteData = [
    { name:'John A. Smith', address:'1236 Some Street', city:'San Francisco', state:'CA', amount:5, active:'yes', colors:['red'], fruit:['banana','cherry'], last_login:'4/19/2007' },
    { name:'Bob C. Uncle', address:'9996 Random Road', city:'Los Angeles', state:'CA', amount:0, active:'maybe', colors:['green'], fruit:['cherry'], last_login:['4/10/2007'] },
    { name:'John D. Smith', address:'1623 Some Street', city:'San Francisco', state:'CA', amount:5, active:'yes', colors:['red'], fruit:['cherry'], last_login:'4/19/2007' },
    { name:'Joan E. Jones', address:'3217 Another Ave', city:'New York', state:'NY', amount:3, active:'no', colors:['red','blue'], fruit:['apple','cherry'], last_login:'2/15/2006' },
    { name:'Bob F. Uncle', address:'9899 Random Road', city:'Los Angeles', state:'CA', amount:0, active:'maybe', colors:['green'], fruit:['banana'], last_login:'1/23/2004' },
    { name:'John G. Smith', address:'1723 Some Street', city:'San Francisco', state:'CA', amount:5, active:'yes', colors:['red'], fruit:['apple'], last_login:'4/19/2007' },
    { name:'Joan H. Jones', address:'3241 Another Ave', city:'New York', state:'NY', amount:3, active:'no', colors:['red','blue'], fruit:['kiwi'], last_login:'2/15/2006' },
    { name:'Bob I. Uncle', address:'9909 Random Road', city:'Los Angeles', state:'CA', amount:0, active:'maybe', colors:['green'], fruit:['apple','banana'], last_login:'1/23/2004' },
    { name:'John J. Smith', address:'1623 Some Street', city:'San Francisco', state:'CA', amount:5, active:'yes', colors:['red'], fruit:['apple','cherry'], last_login:'4/19/2007' },
    { name:'Joan K. Jones', address:'3721 Another Ave', city:'New York', state:'NY', amount:3, active:'no', colors:['red','blue'], fruit:['banana'], last_login:'2/15/2006' }
  ];

  var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  var nameEditor = new Y.TextAreaCellEditor({
    validator: {
      rules: {
        name: {
          required: true,
          email: true
        }
      }
    }
  });

  var fruitEditor = new Y.DropDownCellEditor({
    editable: true,
    multiple: true,
    validator: {
      rules: {
        value: {
          required: true
        }
      }
    },
    options: {
      apple: 'Apple',
      cherry: 'Cherry',
      banana: 'Banana',
      kiwi: 'Kiwi'
    }
  });

  var nestedCols = [
    {
      key: 'name',
      editor: nameEditor,
      sortable: true
    },
    {
      key: 'address',
      editor: new Y.TextAreaCellEditor(),
      sortable: true
    },
    {
      key: 'city',
      editor: new Y.TextAreaCellEditor()
    },
    {
      key: 'state',
      editor: new Y.DropDownCellEditor({
        editable: true,
        options: states
      })
    },
    {
      key: 'amount',
      editor: new Y.TextCellEditor({
        inputFormatter: Y.DataType.String.evaluate,
        validator: {
          rules: {
            value: {
              required: true,
              number: true
            }
          }
        }
      })
    },
    {
      key: 'active',
      editor: new Y.RadioCellEditor({
        editable: true,
        options: {
          yes: 'Yes',
          no: 'No',
          maybe: 'Maybe'
        }
      })
    },
    {
      key: 'colors',
      editor: new Y.CheckboxCellEditor({
        editable: true,
        multiple: true,
        options: {
          red: 'Red',
          green: 'Green',
          blue: 'Blue'
        }
      })
    },
    {
      key: 'last_login',
      editor: new Y.DateCellEditor({
        calendar: {
          width:'250px',
          showPrevMonth: false,
          showNextMonth: false,
          selectionMode: 'multiple',
          dateFormat: '%m/%d/%Y'
        },
        validator: {
          rules: {
            value: {
              required: true
            }
          }
        }
      })
    },
    {
      key: 'fruit',
      editor: fruitEditor
    }
  ];

  var dataTable = new Y.DataTable({
    columns: nestedCols,
    data: remoteData,
    editEvent: 'dblclick',
    plugins: [
      {
        fn: Y.Plugin.DataTableHighlight,
        cfg: {
          highlightRange: false
        }
      }
    ]
  }).render('#myDataTable');

  dataTable.get('boundingBox').unselectable();

});