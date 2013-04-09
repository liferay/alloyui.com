# AlloyUI.com

![AlloyUI Robo Suit](http://f.cl.ly/items/1c1z23343G2e2I3X3a3P/Screen-Shot-2013-04-08-at-9.37.36-AM.png)

If you want to report an issue about [AlloyUI's website](http://alloyui.com) you are in the right place. But if you're facing problems with AlloyUI's source code, please visit [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## Table of contents

* [How it works?](#how-it-works)
* [Dependencies](#dependencies)
* [Getting started](#getting-started)
* [Structure](#structure)
* [Deploy](#deploy)
* [Bonus](#bonus)

## How it works?

We use [Docpad](https://github.com/bevry/docpad), a static generator in NodeJS.

## Dependencies

1. Install [NodeJS](https://github.com/bevry/community/wiki/Installing-Node), if you don't have it yet.

2. Install [Docpad](https://github.com/bevry/docpad) globally: `[sudo] npm install -fg docpad`

3. Install [Yogi Alloy](https://github.com/liferay/yogi-alloy) globally: `[sudo] npm -g install yogi yogi-alloy`

## Getting started

Once you have dependencies installed, you just need to:

1. Clone the project: `git clone git@github.com:liferay/alloyui.com.git`

2. Then go to the project's folder: `cd alloyui.com`

3. And finally run: `yogi alloy --site-watch`

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

### [docpad.coffee](https://github.com/liferay/alloyui.com/blob/master/docpad.coffee)

Stores most settings of the application.

### [package.json](https://github.com/liferay/alloyui.com/blob/master/package.json)

List NodeJS modules dependencies.

## Deploy

Go to the branch you want to deploy and run `yogi alloy --site-deploy`, now you can see your changes live at [alloyui.com](http://alloyui.com/).

> **Note:** Before running this command make sure you're on master, 1.7.x, 1.5.x or 1.0.x branches, and also you need everything committed.

## Bonus

We use a template engine called [Eco (.eco)](https://github.com/sstephenson/eco), so you should definitely install a syntax highlight for it on your code editor.