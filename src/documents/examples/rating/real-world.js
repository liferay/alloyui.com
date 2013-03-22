YUI().use('aui-rating', 'node', function (Y) {
  var titleBox = Y.one('#titleBox');

  var instance, title, stars;

  var rating = new Y.StarRating({
    boundingBox: '#myRating',
    disabled: false,
    label: "It's OK to be honest:"
  }).render();

  rating.on('click', function (event) {
    instance = event.target;

    title = instance.get('title');
    stars = instance.get('value');

    if (!title) {
      titleBox.set('innerHTML', 'You selected <strong>0 stars</strong> - no rating!');
    } else {
      titleBox.set('innerHTML', 'You selected <strong>' + stars + ' stars</strong> - "' + title + '"!');
    }
  });
});