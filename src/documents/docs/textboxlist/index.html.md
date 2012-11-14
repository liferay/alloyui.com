---
layout: single-doc
title: Textbox List
tags: 'textboxlist'
---

# Textbox List

The Textbox List component display users choices to them as graphic choices.

#### Getting Started

First load the seed file, if you haven't yet.

``` html
<script src="http://cdn.alloyui.com/3.2.8/aui.min.js"></script>
```

Then initialize AlloyUI and load the Textbox List module.

``` javascript
AUI().use('aui-textboxlist', function(A) {
  // code goes here
});
```

#### Using Textbox List

Create a HTML element:

``` html
<div id="demo"></div>
```

Now create a new instance of Textbox List component, then tell to `contentBox` where it's going to be attached and populate some suggestions by adding a simple JavaScript array to `dataSource`. Finally, let's render it!

``` javascript
AUI().use('aui-textboxlist', function(A) {

  var textboxlist = new A.TextboxList({
    contentBox: '#demo',
    dataSource: ['America', 'Europe', 'Asia']
  }).render();

});
```

[See it live.](../../examples/textboxlist/)

#### Configuring Textbox List

There are some other options that you can pass to your Textbox List instance.

For example, if you set `typeAhead` for `true` the input field should be automatically updated with the first result as the user types, automatically selecting the portion of the text the user has not typed yet.

``` javascript
AUI().use('aui-textboxlist', function(A) {

  var textboxlist = new A.TextboxList({
    contentBox: '#demo',
    dataSource: ['America', 'Europe', 'Asia'],
    typeAhead: true
  }).render();

});
```

You can even define a more specific `schema` and add the `matchKey` option to choose the key or numeric index on the schema to match the result against.

``` javascript
var states = [
  ['AL', 'Alabama', 'The Heart of Dixie'],
  ['MA', 'Massachusetts', 'The Spirit of America'],
  ['WY', 'Wyoming', 'Like No Place on Earth']
];

AUI().use('aui-textboxlist', function(A) {

  var textboxlist = new A.TextboxList({
    contentBox: '#demo'
    dataSource: states,
    matchKey: 'name',
    schema: {
      resultFields: ['key', 'name', 'description']
    }
  }).render();

});
```

For more information about configuration, check the <a href="#">API Docs</a>.