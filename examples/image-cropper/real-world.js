YUI().ready('aui-image-cropper', function(Y) {

  var imageCropper = new Y.ImageCropper({
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

    croppedImage.html(Y.Lang.sub(statusTPL, cropRegion));
  };

  imageCropper.after('crop', function(event) {
    updateImage();
  });

  var croppedImage = Y.one('#croppedImage');

  var croppedStatus = Y.one('#croppedStatus');

  croppedImage.show();

  updateImage();

  Y.one('#cropLink').on('click', function (event) {
    imageCropper.setAttrs({
      x: 45,
      y: 5,
      cropWidth: 390,
      cropHeight: 125
    });
  });

});