AUI().use('aui-property-list', function(A) {
  var properties = [
    {
      editor: new A.CheckboxCellEditor({
        editable: true,
        options: [ 'True' ]
      }),
      name: 'Boolean',
      value: 'True'
    },
    {
      editor: new A.DateCellEditor(),
      name: 'Date',
      value: new Date().toDateString()
    },
    {
      editor: new A.RadioCellEditor({
        editable: true,
        options: [ 'Yes', 'No' ]
      }),
      name: 'Radio',
      value: 'Yes'
    },
    {
      editor: new A.DropDownCellEditor({
        editable: true,
        options: {
          apple: 'Apple',
          cherry: 'Cherry',
          banana: 'Banana',
          kiwi: 'Kiwi'
        }
      }),
      name: 'Select',
      value: 'Apple'
    },
    {
      editor: new A.TextAreaCellEditor(),
      name: 'Text-box',
      value: 'Write some text, then save!'
    }
  ];

  window.pList = new A.PropertyList({
    data: properties
  }).render('#myPropertyList');

});
