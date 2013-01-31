AUI().ready('aui-image-cropper', function(A) {

  var imageNode = A.one('#image');

  var cropLinkNode = A.one('#cropLink');

  imageCropper = new A.ImageCropper({
    srcNode: imageNode,
    // cropHeight: 100,
    // cropWidth: 100,
    // minWidth: 50,
    // minHeight: 50,
    // movable: true,
    // preserveRatio: true,
    // resizeable: true,
    x: 100,
    y: 100
  }).render();

  var statusTPL = '<b class="x">x: {x}</b><b class="y">y: {y}</b><b class="height">height: {height}</b><b class="width">width: {width}</b>';

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

  cropLinkNode.on('click', function (event) {
    imageCropper.setAttrs({
      x: 45,
      y: 5,
      cropWidth: 390,
      cropHeight: 125
    });
  });

});