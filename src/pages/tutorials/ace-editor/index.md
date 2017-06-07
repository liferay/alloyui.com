---
title: Ace Editor
description: An embeddable code editor that matches the features of native editors.
layout: "tutorials"
weight: 100
---

###### {$page.description}

<article id="1">

## Getting Started

First load the seed and CSS files, if you have not yet.

```html
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Ace Editor module.

```javascript
YUI().use(
	'aui-ace-editor',
	function(Y) {
		// code goes here
	}
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element for the Ace Editor.

```html
<div id="myEditor"></div>
```

Now create a new instance of Ace Editor with the newly created element.

```javascript
YUI().use(
	'aui-ace-editor',
	function(Y) {
		new Y.AceEditor(
			{
				boundingBox: '#myEditor'
			}
		).render();
	}
);
```

</article>

<article id="3">

## Configuring {$page.title}

Once a new instance of Ace Editor is created, the mode can be set to correspond to the language being typed.

```javascript
YUI().use(
	'aui-ace-editor',
	function(Y) {
		new Y.AceEditor(
			{
				boundingBox: '#myEditor',
				mode: 'javascript'
			}
		).render();
	}
);
```

The editor can also be set to load with content/code already written.

```javascript
YUI().use(
	'aui-ace-editor',
	function(Y) {
		new Y.AceEditor(
			{
				boundingBox: '#myEditor',
				mode: 'xml',
				value: '<body id="content"></body>'
			}
		).render();
	}
);
```

</article>