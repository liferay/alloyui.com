AUI().ready(
  'aui-form-validator',
  function(A) {
    var rules = {
      age: {
        customRule: true,
        digits: true,
        range: [18, 50]
      },
      email: {
        email: true,
        required: true
      },
      emailConfirmation: {
        email: true,
        equalTo: '#email',
        required: true
      },
      gender: {
        required: true
      },
      lastName: {
        rangeLength: [2, 50],
        required: true
      },
      name: {
        rangeLength: [2, 50],
        required: true
      },
      picture: {
        acceptFiles: 'jpg, gif, png',
        required: true
      },
      'type[]': {
        required: true
      },
      url: {
        url: true
      }
    };

    var fieldStrings = {
      email: {
        required: 'Type your email in this field.'
      },
      gender: {
        required: 'The gender is required.'
      },
      name: {
        required: 'Required field with a custom message.'
      },
      'type[]': {
        required: 'Select the type is required.'
      }
    };

    new A.FormValidator(
      {
        boundingBox: '#myForm',
        fieldContainer: 'p',
        fieldStrings: fieldStrings,
        rules: rules
      }
    );
  }
);