# [AlloyUI.com](https://alloyui.com/)

[![Build Status](http://img.shields.io/travis/liferay/alloyui.com/master.svg?style=flat)](https://travis-ci.org/liferay/alloyui.com)
[![Dependencies Status](http://img.shields.io/david/liferay/alloyui.com.svg?style=flat)](https://david-dm.org/liferay/alloyui.com)

![AlloyUI Robo Suit](http://f.cl.ly/items/1c1z23343G2e2I3X3a3P/Screen-Shot-2013-04-08-at-9.37.36-AM.png)

If you want to report an issue about [AlloyUI's website](https://alloyui.com) you are in the right place. But if you're facing problems with AlloyUI's source code, please visit [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## Table of contents

* [How it works?](#how-it-works)
* [Dependencies](#dependencies)
* [Getting started](#getting-started)
* [Structure](#structure)
* [Bonus](#bonus)

## How it works?

We use [DocPad](https://github.com/bevry/docpad), a static generator in NodeJS.

## Dependencies

Install [Node.JS](http://nodejs.org/), if you don't have it yet.

## Getting started

Once you have dependencies installed, you just need to:

1. Clone the project: `git clone git@github.com:liferay/alloyui.com.git`

2. Then go to the project's folder: `cd alloyui.com`

3. Install the dependencies: `npm install`

4. And finally run: `npm run watch`

Now you can see the website running in `http://localhost:9778/` :D

## Structure

The basic structure of the project is given in the following way:

<pre>
.
|-- out/
|-- src/
|   |-- documents/
|   |-- files/
|   |-- layouts/
|-- docpad.coffee
|-- package.json
</pre>

### out/

This is where the generated files are stored, once DocPad has been runned. However, this directory is unnecessary in versioning, so it is ignored ([.gitignore](https://github.com/liferay/alloyui.com/blob/master/.gitignore)).

### [src/documents/](https://github.com/liferay/alloyui.com/blob/master/src/documents)

Contains all the pages of this website. Documentation is written in Markdown and examples in JavaScript.

### [src/files/](https://github.com/liferay/alloyui.com/tree/master/src/files)

Has all the images, CSS and JS files.

### [src/layouts/](https://github.com/liferay/alloyui.com/tree/master/src/layouts)

Contains some templates that are used in the application.

### [docpad.js](https://github.com/liferay/alloyui.com/blob/master/docpad.js)

Stores most settings of the application.

### [package.json](https://github.com/liferay/alloyui.com/blob/master/package.json)

List NodeJS modules dependencies.

## Bonus

We use a template engine called [Eco (.eco)](https://github.com/sstephenson/eco), so you should definitely install a syntax highlight for it on your code editor.