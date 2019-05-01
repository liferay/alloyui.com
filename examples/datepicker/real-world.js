YUI({ lang: 'ja' }).use(
  'aui-datepicker',
  function(Y) {
    var datepicker = new Y.DatePicker(
      {
        trigger: 'input',
        mask: '%a, %b %d, %Y',
        popover: {
          toolbars: {
            header: [[
              {
                icon:'icon-trash',
                label: 'Clear',
                on: {
                  click: function() {
                    datepicker.clearSelection();
                  }
                }
              },
              {
                icon:'icon-globe',
                label: 'Travel date',
                on: {
                  click: function() {
                    datepicker.clearSelection();
                    datepicker.selectDates(new Date());
                  }
                }
              }
            ]]
          },
          zIndex: 1
        }
      }
    );
  }
);