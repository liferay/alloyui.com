AUI().use('aui-datatable', 'datatable-sort', 'aui-datatype', function(A) {

  window.nameEditor = new A.TextAreaCellEditor({
    validator: {
      rules: {
        name: {
          required: true,
          email: true
        }
      }
    }
  });

  window.fruitEditor = new A.DropDownCellEditor({
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
      editor: new A.TextAreaCellEditor(),
      sortable: true
    },
    {
      key: 'city',
      editor: new A.TextAreaCellEditor()
    },
    {
      key: 'state',
      editor: new A.DropDownCellEditor({
        editable: true,
        options: states
      })
    },
    {
      key: 'amount',
      editor: new A.TextCellEditor({
        inputFormatter: A.DataType.String.evaluate,
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
      editor: new A.RadioCellEditor({
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
      editor: new A.CheckboxCellEditor({
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
      editor: new A.DateCellEditor({
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

  window.dtable = new A.DataTable({
    columns: nestedCols,
    data: remoteData,
    editEvent: 'dblclick',
    plugins: [
      {
        fn: A.Plugin.DataTableHighlight,
        cfg: {
          highlightRange: false
        }
      }
    ]
  }).render("#dt1");

  dtable.get('boundingBox').unselectable();

});