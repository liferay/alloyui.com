---
title: Affix
description: Enables the creation of fixed navigation bars.
layout: "tutorials"
weight: 200
---

###### {$page.description}

<article id="1">

## Getting Started

First load the seed and CSS files, if you have not yet.

```html
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Affix module.

```javascript
YUI().use(
  'aui-affix',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create a list of elements that contain the links for the navigation bar.

```html
<div id="myAffix">
  <ul>
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</div>
```

Now create a new instance of Affix component and specify the newly created menu as the target.

```javascript
YUI().use(
  'aui-affix',
  function(Y) {
    new Y.Affix(
      {
        target: '#myAffix'
      }
    );
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

Two other parameters need to be specified: `offsetTop` and `offsetBottom`. `offsetTop` is the number of pixels from the top when the target will become fixed, and `offsetBottom` is the same property for the bottom. For now, we will just set them to zero.

```javascript
YUI().use(
  'aui-affix',
  function(Y) {
    new Y.Affix(
      {
        target: '#myAffix',
        offsetTop: 0,
        offsetBottom: 0
      }
    );
  }
);
```

Try out different offset values in your Affix instance to finetune the behavior.

</article>