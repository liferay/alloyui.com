YUI().use(
  'aui-form-validator',
  function(Y) {
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
      picture: {
        acceptFiles: 'jpg, gif, png',
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
      name: {
        required: 'Please provide your name.'
      }
    };

    new Y.FormValidator(
      {
        boundingBox: '#myForm',
        fieldStrings: fieldStrings,
        rules: rules,
        showAllMessages: true
      }
    );
  }
);