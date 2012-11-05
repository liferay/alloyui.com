---
layout: single-doc
title: Carousel
tags: 'carousel'
---

# Carousel

The Carousel component provides an interactive way of cycling through elements.

#### Getting Started

First load the seed file, if you haven't yet.

``` html
<script src="http://cdn.alloyui.com/3.2.8/aui.min.js"></script>
```

Then initialize AlloyUI and load the Carousel module.

``` javascript
AUI().use('aui-carousel', function(A) {
  // code goes here
});
```

#### Using Carousel

Create a list of elements that contains the images you want to show:

``` html
<div id="demo">
  <div style="background: url(assets/img/article0.png);" class="aui-carousel-item"></div>
  <div style="background: url(assets/img/article1.png);" class="aui-carousel-item"></div>
  <div style="background: url(assets/img/article2.png);" class="aui-carousel-item"></div>
  <div style="background: url(assets/img/article3.png);" class="aui-carousel-item"></div>
</div>
```

Now create a new instance of Carousel component, then tell to `contentBox` where it's going to be attached and define some `width` and `height`. Finally, let's render it!

``` javascript
AUI().ready('aui-carousel', function(A) {

  var carousel = new A.Carousel({
      contentBox: '#demo',
      width: 680,
      height: 254
  }).render();

});
```

[See it live.](../../examples/carousel/)