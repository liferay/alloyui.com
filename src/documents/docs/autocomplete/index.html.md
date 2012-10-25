---
layout: single-doc
title: AutoComplete
tags: 'autocomplete'
---

# AutoComplete

The AutoComplete component provides suggestions while users type into the field.

#### Getting Started

First load the seed file, if you haven't yet.

``` html
<script src="http://cdn.alloyui.com/3.2.8/aui.min.js"></script>
```

Then initialize AlloyUI and load the AutoComplete module.

``` javascript
AUI().use('aui-autocomplete', function(A) {
  // code goes here
});
```

#### Using AutoComplete

Create a HTML element:

``` html
<div id="myAutoComplete"></div>
```

Now create a new instance of AutoComplete component, then tell to `contentBox` where it's going to be attached and populate some suggestions by adding a simple JavaScript array to `dataSource`.

``` javascript
AUI().use('aui-autocomplete', function(A) {

  var autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete',
    dataSource: ['America', 'Europe', 'Asia']
  });

});
```

Finally, let's render it!

``` javascript
AUI().use('aui-autocomplete', function(A) {

  var autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete',
    dataSource: ['America', 'Europe', 'Asia']
  });

  autoComplete.render();

});
```

[See it live.](../../examples/autocomplete/)

#### Configuring AutoComplete

There are some other options that you can pass to your AutoComplete instance.

For example, you can add support for multiple options by defining a `delimChar` - character to indicate the beginning or ending of a new value.

``` javascript
AUI().use('aui-autocomplete', function(A) {

  var autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete',
    dataSource: ['America', 'Europe', 'Asia']
    delimChar: ','
  });

  autoComplete.render();

});
```

Also, if you set `typeAhead` for `true` the input field should be automatically updated with the first result as the user types, automatically selecting the portion of the text the user has not typed yet.

``` javascript
AUI().use('aui-autocomplete', function(A) {

  var autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete',
    dataSource: ['America', 'Europe', 'Asia']
    delimChar: ',',
    typeAhead: true,
  });

  autoComplete.render();

});
```

You can even define a more specific `schema` and add the `matchKey` option to choose the key or numeric index on the schema to match the result against.


``` javascript
var states = [
  ['AL', 'Alabama', 'The Heart of Dixie'],
  ['MA', 'Massachusetts', 'The Spirit of America'],
  ['WY', 'Wyoming', 'Like No Place on Earth']
];

AUI().use('aui-autocomplete', function(A) {

  var autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete'
    dataSource: states,
    matchKey: 'name',
    schema: {
      resultFields: ['key', 'name', 'description']
    }
  });

});
```

For more information about configuration, check the <a href="#">API Docs</a>.

<!-- #### AutoComplete suggestions

There are two primary ways to provide the AutoComplete suggestions: From a local array; From a remote data service; Locally defined values are best for small, fixed sets of suggestions. Remote suggestions should be used for larger data sets. When used with the DataSource component, filtering large remote data services can be pushed to the server as well, maximizing client-side performance.

#### Local Suggestions

To configure and provide AutoComplete suggestions locally, you can either pass an array directly to its constructor or you can set the dataSource property to an local array.

Directly initialize suggestions in constructor -->