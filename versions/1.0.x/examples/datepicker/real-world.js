AUI().use(
  'aui-datepicker',
  function(A) {
    new A.DatePickerSelect(
      {
        boundingBox: '#datePicker',
        dayNode: '#dayNode',
        dayNodeName: 'daySelect',
        monthNode: '#monthNode',
        monthNodeName: 'monthSelect',
        render: true,
        srcNode: '#srcNode',
        trigger: '#trigger',
        yearNode: '#yearNode',
        yearNodeName: 'yearSelect',
        yearRange: [1980, 2013]
      }
    );
  }
);