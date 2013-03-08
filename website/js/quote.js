YUI().use('node', function (Y) {

  var ericsQuote = '"When AlloyUI arrived on the scene, it added a new dimension to YUI contributorship. Professional, robust, and beautifully designed, the Alloy project and its engineers created a world of new options for YUI implementers, and it helped the YUI project turn the corner to become a contributor-driven, community-owned open source project." <br><span class="author">&mdash; Eric Miraglia, Product Manager, Google Inc. &amp; Former YUI Manager</span>',
      satyansQuote = '"AlloyUI was one of the first professional quality solutions built on top of YUI3, and as early adopters the folks at AlloyUI have been instrumental in helping define some of the core functionality which now makes up YUI." <br><span class="author">&mdash; YUI Team</span>',
      quotes = [ericsQuote, satyansQuote],
      quoteContainer = Y.one('.aui-quote p'),
      random = Math.floor(Math.random() * 2);

  quoteContainer.append(quotes[random]);

});