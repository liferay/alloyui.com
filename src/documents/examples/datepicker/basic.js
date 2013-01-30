AUI().use('aui-datepicker', function(A) {

  new A.DatePickerSelect({
    appendOrder: [ 'm', 'd', 'y' ]
  }).render('#myDatePicker');

  new A.DatePicker({
    trigger: '#myInput',
    calendar: {
      selectedDates: new Date,
      dateFormat: '%m/%d/%Y'
    }
  }).render('#myOtherDatePicker');

});