# AlloyUI.com

![AlloyUI Robo Suit](http://f.cl.ly/items/1c1z23343G2e2I3X3a3P/Screen-Shot-2013-04-08-at-9.37.36-AM.png)

If you want to report an issue about [AlloyUI's website](http://alloyui.com) you are in the right place. But if you're facing problems with AlloyUI's source code, please visit [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## Table of contents

* [How it works?](#how-it-works)
* [Dependencies](#dependencies)
* [Getting started](#getting-started)
* [Structure](#structure)
* [Deploy](#deploy)

## How it works?

We use [Docpad](https://github.com/bevry/docpad), a static generator in NodeJS.

## Dependencies

1. Install [NodeJS](https://github.com/bevry/community/wiki/Installing-Node), if you don't have it yet.

2. Install [Docpad](https://github.com/bevry/docpad) globally: `sudo npm install -fg docpad`

3. Install [Yogi Alloy](https://github.com/liferay/yogi-alloy) globally: `sudo npm -g install yogi yogi-alloy`

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

Just run `yogi alloy --site-deploy` and then go to [alloyui.com](http://alloyui.com/).

> **Note:** this will only work for master branch. We're currently working to improve this Yogi Alloy task to support deploy for different website versions.