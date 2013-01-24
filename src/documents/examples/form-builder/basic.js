AUI().use('aui-form-builder', function(A) {

  window.formBuilder = new A.FormBuilder({
    boundingBox: '#formBuilder',
    availableFields: [
      {
        iconClass: 'aui-form-builder-field-icon-text',
        label: 'Text',
        type: 'text',
        unique: true,
        width: 75,
        id: 'uniqueTextField',
        readOnlyAttributes: ['name']
      },
      {
        iconClass: 'aui-form-builder-field-icon-textarea',
        label: 'Textarea',
        type: 'textarea',
        hiddenAttributes: ['tip']
      },
      {
        iconClass: 'aui-form-builder-field-icon-checkbox',
        label: 'Checkbox',
        type: 'checkbox'
      },
      {
        iconClass: 'aui-form-builder-field-icon-button',
        label: 'Button',
        type: 'button'
      },
      {
        iconClass: 'aui-form-builder-field-icon-select',
        label: 'Select',
        type: 'select'
      },
      {
        iconClass: 'aui-form-builder-field-icon-radio',
        label: 'Radio Buttons',
        type: 'radio'
      },
      {
        iconClass: 'aui-form-builder-field-icon-fileupload',
        label: 'File Upload',
        type: 'fileupload'
      },
      {
        iconClass: 'aui-form-builder-field-icon-fieldset',
        label: 'Fieldset',
        type: 'fieldset'
      }
    ],
    fields: [
      {
        label: 'City',
        predefinedValue: 'chicago',
        type: 'select',
        options: [
          {
            label: 'Ney York',
            value: 'new york'
          },
          {
            label: 'Chicago',
            value: 'chicago'
          }
        ]
      },
      {
        label: 'Colors',
        type: 'radio',
        options: [
          {
            label: 'Red',
            value: 'red'
          },
          {
            label: 'Green',
            value: 'green'
          },
          {
            label: 'Blue',
            value: 'blue'
          }
        ]
      }
    ]
  }).render();

});