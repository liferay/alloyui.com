YUI().ready('aui-form-validator', function(Y) {

  var rules = {
    name: {
      required: true,
      rangeLength: [2, 50]
    },
    picture: {
      acceptFiles: 'jpg, gif, png',
      required: true
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
    url: {
      url: true
    }
  };

  var fieldStrings = {
    name: {
      required: 'Please provide your name.'
    },
    email: {
      required: 'Type your email in this field.'
    }
  };

  new Y.FormValidator({
    boundingBox: '#myForm',
    showAllMessages: true,
    rules: rules,
    fieldStrings: fieldStrings
  });

});