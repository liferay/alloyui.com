AUI().ready(
  'aui-form-validator',
  function(A) {
    new A.FormValidator(
      {
        boundingBox: '#myForm'
      }
    );
  }
);