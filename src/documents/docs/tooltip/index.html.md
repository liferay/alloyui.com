---
layout: single-doc
title: Tooltip
tags: 'tooltip'
---

# Tooltip

The Tooltip component give users contextual information or content, such as help text or images.

---

#### Getting Started

First load the seed file, if you haven't yet.

``` html
<script src="http://cdn.alloyui.com/3.2.8/aui.min.js"></script>
```

Then initialize AlloyUI and load the AutoComplete module.

``` javascript
AUI().use('aui-tooltip', function(A) {
  // code goes here
});
```

---

#### Using Tooltip

Create a HTML element:

``` html
<a href="#" id="tooltip">Hover for a simple tooltip</a>
```

Now create a new instance of Tooltip component, then set some HTML element to `trigger` and tell to `bodyContent` what text it's going to be attached on tooltip. Finally, let's render it!

``` javascript
AUI().ready('aui-tooltip', function(A) {

  var tooltip = new A.Tooltip({
    trigger: '#tooltip',
    bodyContent: 'Lorem ipsum sit amet, consectetur elit.'
  }).render();

});
```

---

#### Configuring Tooltip

There are some other options that you can pass to your Tooltip instance.

For example, you can set the content of a tooltip with the title attribute of a HTML element by defining `title` to `true`.

``` javascript
AUI().ready('aui-tooltip', function(A) {

  var tooltip = new A.Tooltip({
    trigger: '#tooltip',
    title: true
  }).render();

});
```

Also, you can hide the tooltip's arrow by defining `showArrow` to `false`.

``` javascript
AUI().ready('aui-tooltip', function(A) {

  var tooltip = new A.Tooltip({
    trigger: '#tooltip',
    showArrow: false
  }).render();

});
```

You can even change the position of the tooltip.

``` javascript
AUI().ready('aui-tooltip', function(A) {

  var tooltip = new A.Tooltip({
    trigger: '#tooltip',
    align: { points: [ 'bc', 'tc' ] }
  }).render();

});
```

For more information about configuration, check the <a href="#">API Docs</a>.