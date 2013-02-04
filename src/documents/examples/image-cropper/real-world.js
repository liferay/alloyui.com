AUI().ready('aui-image-cropper', function(A) {

  var imageCropper = new A.ImageCropper({
    srcNode: "#image",
    x: 100,
    y: 100
  }).render();

  var statusTPL = '<strong class="x">x: {x}</strong><strong class="y">y: {y}</strong><strong class="height">height: {height}</strong><strong class="width">width: {width}</strong>';

  var updateImage = function() {

    var cropRegion = imageCropper.get('region');

    croppedImage.setStyles(
      {
        'backgroundPosition': (-cropRegion.x) + 'px ' + (-cropRegion.y) + 'px',
        height: cropRegion.height,
        width: cropRegion.width
      }
    );

    croppedImage.html(A.Lang.sub(statusTPL, cropRegion));
  };

  imageCropper.after('crop', function(event) {
    updateImage();
  });

  var croppedImage = A.one('#croppedImage');

  var croppedStatus = A.one('#croppedStatus');

  croppedImage.show();

  updateImage();

  A.one('#cropLink').on('click', function (event) {
    imageCropper.setAttrs({
      x: 45,
      y: 5,
      cropWidth: 390,
      cropHeight: 125
    });
  });

});