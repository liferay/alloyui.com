AUI().ready('aui-form-validator', function(A) {

  var validator = new A.FormValidator({
    boundingBox: '#form',

    rules: {
      name: {
        required: true
      },
      email: {
        required: true
      },
      age: {
        required: true,
        digits: true
      }
    }
  });

});