AUI().ready('aui-form-validator', function(A) {

  var validator = new A.FormValidator({
    boundingBox: "#form",
    fieldContainer: 'p',
    rules: {
      name: {
        required: true,
        rangeLength: [2,50]
      },
      lastName: {
        required: true,
        rangeLength: [2,50]
      },
      age: {
        customRule: true,
        digits: true,
        range: [18, 50]
      },
      gender: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      emailConfirmation: {
        required: true,
        email: true,
        equalTo: '#email'
      },
      picture: {
        required: true,
        acceptFiles: 'jpg, gif, png'
      },
      url: {
        url: true
      },
      'type[]': {
        required: true
      }
    },
    fieldStrings: {
      name: {
        required: 'Required field with a custom message.'
      },
      gender: {
        required: 'The gender is required.'
      },
      email: {
        required: 'Type your email in this field.'
      },
      'type[]': {
        required: 'Select the type is required.'
      }
    }
  });
});