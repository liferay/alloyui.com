---
layout: single-doc
title: I/O
tags: 'io'
---

# I/O

The I/O component allows you to make asynchronous HTTP (Ajax) requests.

#### Getting Started

First load the seed file, if you haven't yet.

``` html
<script src="http://cdn.alloyui.com/3.2.8/aui.min.js"></script>
```

Then initialize AlloyUI and load the I/O module.

``` javascript
AUI().use('aui-io-request', function (A) {
  // code goes here
});
```

#### Using I/O

Make an asynchonous request and gets the response data.

``` javascript
AUI().use('aui-io-request', function (A) {

  A.io.request('example.json', {
    on: {
      success: function() {
        var data = this.get('responseData');
      }
    }
  });

});
```

#### Configuring I/O

There are some other options that you can pass to your I/O method.

For example, you can explicit the type of the request (i.e., could be xml, json, javascript, text).

``` javascript
AUI().use('aui-io-request', function (A) {

  A.io.request('example.xml', {
    dataType: 'xml',
    on: {
      success: function() {
        var data = this.get('responseData');
      }
    }
  });

});
```

Also, you can set `cache` to `false` so the current timestamp will be appended to the url, avoiding the url to be cached.

``` javascript
AUI().use('aui-io-request', function (A) {

  A.io.request('example.xml', {
    cache: 'false',
    on: {
      success: function() {
        var data = this.get('responseData');
      }
    }
  });

});
```


