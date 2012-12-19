AUI().ready('aui-form-validator', function(A) {

  var validator2 = new A.FormValidator({
    boundingBox: "#fm2",

    fieldContainer: 'p',

    rules: {
      picture: {
        required: true,
        acceptFiles: 'jpg, gif, png'
      },
      age: {
        customRule: true,
        digits: true,
        range: [18, 50]
      },
      email: {
        required: true,
        email: true
      },
      emailConfirmation: {
        required: true,
        email: true,
        equalTo: '#email1'
      },
      url: {
        url: true
      },
      gender: {
        required: true
      },
      'type[]': {
          required: true
      },
      lastName: {
        required: true,
        rangeLength: [2,50]
      },
      name: {
        required: true,
        rangeLength: [2,50]
      }
    },

    fieldStrings: {
        email: {
        email: 'Type your email in this field.'
      },
      gender: {
        required: 'The gender is required.'
      },
      'type[]': {
        required: 'Select the type is required.'
      },
      name: {
        required: 'Required field with a custom message.'
      }
    }
  });

});