AUI().use(
  'aui-form-validator',
  function(A) {
    var rules = {
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
      name: {
        rangeLength: [2, 50],
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