---
layout: single-doc
title: AutoComplete Overview
---

# AutoComplete Overview

The AutoComplete provides suggestions depending on the typed text. It also allows multiple value entries. The suggestions shown by the AutoComplete can come from a local Array or from a remote data service.

#### Getting Started

Create a HTML input element

`<input id="autoComplete" />`

Initialize the AutoComplete using a jQuery selector

```
$(document).ready(function() {
    $("#autoComplete").kendoAutoComplete(["Item1", "Item2"]);
});
```

#### AutoComplete Suggestions

There are two primary ways to provide the AutoComplete suggestions: From a local array; From a remote data service; Locally defined values are best for small, fixed sets of suggestions. Remote suggestions should be used for larger data sets. When used with the DataSource component, filtering large remote data services can be pushed to the server as well, maximizing client-side performance.

#### Local Suggestions

To configure and provide AutoComplete suggestions locally, you can either pass an array directly to its constructor or you can set the dataSource property to an local array.

Directly initialize suggestions in constructor


`$("#autoComplete").kendoAutoComplete(["Item1", "Item2", "Item3"]);`

Using dataSource property to bind to local Array

```
var data = ["Item1", "Item2", "Item3"];

$("#autoComplete").kendoAutoComplete({
   dataSource: data
});
```