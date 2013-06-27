AUI().use(
  'aui-datepicker',
  function(A) {
    new A.DatePickerSelect(
      {
        appendOrder: ['m', 'd', 'y'],
        calendar: {
          dates: ['10/10/2013']
        }
      }
    ).render('#myDatePicker');

    new A.DatePicker(
      {
        calendar: {
          dateFormat: '%m/%d/%Y',
          dates: ['10/10/2013']
        },
        trigger: '#myInput'
      }
    ).render('#myOtherDatePicker');
  }
);