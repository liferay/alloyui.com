AUI().use('aui-datepicker', function(A) {

  var dynamicDatepicker = new A.DatePickerSelect({
    appendOrder: [ 'm', 'd', 'y' ]
  }).render('#datePicker');

  var simpleDatepicker = new A.DatePicker({
    trigger: '#trigger1',
    calendar: {
      selectedDates: new Date,
      dateFormat: '%m/%d/%Y'
    }
  }).render('#simpleDatePicker');

});