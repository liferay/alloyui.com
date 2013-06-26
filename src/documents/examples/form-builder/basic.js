YUI().use(
  'aui-form-builder',
  function(Y) {
    new Y.FormBuilder(
      {
        availableFields: [
          {
            iconClass: 'form-builder-field-icon-text',
            id: 'uniqueTextField',
            label: 'Text',
            readOnlyAttributes: ['name'],
            type: 'text',
            unique: true,
            width: 75
          },
          {
            hiddenAttributes: ['tip'],
            iconClass: 'form-builder-field-icon-textarea',
            label: 'Textarea',
            type: 'textarea'
          },
          {
            iconClass: 'form-builder-field-icon-checkbox',
            label: 'Checkbox',
            type: 'checkbox'
          },
          {
            iconClass: 'form-builder-field-icon-button',
            label: 'Button',
            type: 'button'
          },
          {
            iconClass: 'form-builder-field-icon-select',
            label: 'Select',
            type: 'select'
          },
          {
            iconClass: 'form-builder-field-icon-radio',
            label: 'Radio Buttons',
            type: 'radio'
          },
          {
            iconClass: 'form-builder-field-icon-fileupload',
            label: 'File Upload',
            type: 'fileupload'
          },
          {
            iconClass: 'form-builder-field-icon-fieldset',
            label: 'Fieldset',
            type: 'fieldset'
          }
        ],
        boundingBox: '#myFormBuilder',
        fields: [
          {
            label: 'City',
            options: [
              {
                label: 'Ney York',
                value: 'new york'
              },
              {
                label: 'Chicago',
                value: 'chicago'
              }
            ],
            predefinedValue: 'chicago',
            type: 'select'
          },
          {
            label: 'Colors',
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
            ],
            type: 'radio'
          }
        ]
      }
    ).render();
  }
);