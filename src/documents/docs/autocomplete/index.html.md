---
layout: single-doc
title: AutoComplete
tags: 'autocomplete'
---

# AutoComplete

The AutoComplete component provides suggestions while users type into the field.

---

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
---

#### Using AutoComplete

Create a HTML element:

``` html
<div id="myAutoComplete"></div>
```

Now create a new instance of AutoComplete component, then tell to `contentBox` where it's going to be attached and populate some suggestions by adding a simple JavaScript array to `dataSource`. Finally, let's render it!

``` javascript
AUI().use('aui-autocomplete', function(A) {

  var autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete',
    dataSource: ['America', 'Europe', 'Asia']
  }).render();

});
```

<div class="alert alert-info">
  <strong>Note:</strong> you could also use `boundingBox`, not only `contentBox` to be initialized.<br>
  Read more about the [differences between them](https://github.com/liferay/alloy-ui/wiki/FAQs).
</div>

---

#### Configuring AutoComplete

There are some other options that you can pass to your AutoComplete instance.

For example, you can add support for multiple options by defining a `delimChar` - character to indicate the beginning or ending of a new value.

``` javascript
AUI().use('aui-autocomplete', function(A) {

  var autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete',
    dataSource: ['America', 'Europe', 'Asia'],
    delimChar: ','
  }).render();

});
```

Also, if you set `typeAhead` for `true` the input field should be automatically updated with the first result as the user types, automatically selecting the portion of the text the user has not typed yet.

``` javascript
AUI().use('aui-autocomplete', function(A) {

  var autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete',
    dataSource: ['America', 'Europe', 'Asia'],
    delimChar: ',',
    typeAhead: true,
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

AUI().use('aui-autocomplete', function(A) {

  var autoComplete = new A.AutoComplete({
    contentBox: '#myAutoComplete'
    dataSource: states,
    matchKey: 'name',
    schema: {
      resultFields: ['key', 'name', 'description']
    }
  }).render();

});
```

For more information about configuration, check the <a href="#">API Docs</a>.