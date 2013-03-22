AUI().use('aui-datepicker', function (A) {
  new A.DatePickerSelect({
    appendOrder: ['m', 'd', 'y']
  }).render('#myDatePicker');

  new A.DatePicker({
    calendar: {
      dateFormat: '%m/%d/%Y',
      selectedDates: new Date
    },
    trigger: '#myInput'
  }).render('#myOtherDatePicker');
});