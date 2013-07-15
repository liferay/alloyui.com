AUI().use(
  'aui-datatable',
  function(A) {
    var columns = ["name", "address", "city", "state"];

    var cols = [
      {label: 'Name', key: 'name', editor: false, sortable: true},
      {label: 'Value', key: 'value', sortable: true}
    ];

    var data = [
      {
        editor: new A.CheckboxCellEditor(
          {
            options: ['Boolean value']
          }
        ),
        name: 'Boolean',
        value: 'Boolean value'
      },
      {
        editor: new A.DateCellEditor(),
        name: 'Date',
        value: '10/10/2011'
      },
      {
        editor: new A.TextCellEditor(),
        name: 'Decimal',
        value: 'Decimal'
      },
      {
        editor: new A.TextCellEditor(),
        name: 'Integer',
        value: 'Integer'
      },
      {
        editor: new A.TextCellEditor(),
        name: 'Number',
        value: '123'
      },
      {
        editor: new A.RadioCellEditor(
          {
            options: ['Yes', 'No']
          }
        ),
        name: 'Radio',
        value: 'Yes'
      },
      {
        editor: new A.DropDownCellEditor(
          {
            options: {
              apple: 'Apple',
              banana: 'Banana',
              cherry: 'Cherry',
              kiwi: 'Kiwi'
            }
          }
        ),
        name: 'Select',
        value: 'Apple'
      },
      {
        editor: new A.DropDownCellEditor(
          {
            multiple: true,
            options: {
              apple: 'Apple',
              banana: 'Banana',
              cherry: 'Cherry',
              kiwi: 'Kiwi'
            }
          }
        ),
        name: 'Select multiple',
        value: 'apple'
      },
      {
        editor: new A.TextCellEditor(),
        name: 'Text',
        value: 'Text value'
      },
      {
        editor: new A.TextAreaCellEditor(),
        name: 'Text-box',
        value: 'Text-box value'
      }
    ];

    var dataTable = new A.DataTable.Base(
      {
        columnset: cols,
        editEvent: 'mousedown',
        recordset: data
      }
    ).plug(
      A.Plugin.DataTableSelection,
      {
        selectRow: true
      }
    ).plug(A.Plugin.DataTableSort).render('#myDataTable');

    dataTable.get('boundingBox').unselectable();
  }
);