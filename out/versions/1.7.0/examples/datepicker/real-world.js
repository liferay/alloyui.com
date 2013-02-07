AUI().use('aui-datepicker', function(A) {

  new A.DatePickerSelect({
    boundingBox: '#datePicker',
    srcNode: '#srcNode',
    trigger: '#trigger',
    yearNode: '#yearNode',
    monthNode: '#monthNode',
    dayNode: '#dayNode',
    yearNodeName: 'yearSelect',
    monthNodeName: 'monthSelect',
    dayNodeName: 'daySelect',
    yearRange: [ 1980, 2013 ],
    render: true
  });

});