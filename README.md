# AlloyUI - Website

![AlloyUI Robo Suit](http://f.cl.ly/items/292d3K0l3j221n3m0V0D/Alloy-Robo-Suit.jpg)

If you want to create an issue about something of [AlloyUI's website](http://alloyui.com) you are in the right place. But if the problem is with AlloyUI's source code, please visit [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## Table of contents

* [How it works?](#how-it-works)
* [Dependencies](#dependencies)
* [Getting started](#getting-started)
* [Structure](#structure)
* [Deploy](#deploy)

## How it works?

We use [DocPad](https://github.com/bevry/docpad), a static generator in NodeJS.

## Dependencies

1. [Install NodeJS](https://github.com/bevry/community/wiki/Installing-Node), if you don't have it yet.

2. Install DocPad globally: `sudo npm install -fg docpad@6.21.7`

## Getting started

Once you have dependencies installed, you just need to:

1. Clone the project: `git clone git@github.com:liferay/alloyui.com.git`

2. Then go to the project's folder: `cd alloyui.com`

3. Install plugins: `docpad install`

4. And finally run: `docpad run`

Now you can see the website running in `http://localhost:9778/` :D

## Structure

The basic structure of the project is given in the following way:

<pre>
.
|-- out/
|-- lib/
|-- src/
|   |-- documents/
|   |-- files/
|   |-- layouts/
|-- build.xml
|-- docpad.coffee
|-- package.json
</pre>

### out/

This is where the generated files are stored, once DocPad has been runned. However, this directory is unnecessary in versioning, so it is ignored ([.gitignore](https://github.com/liferay/alloyui.com/blob/master/.gitignore)).

### [lib/](https://github.com/liferay/alloyui.com/blob/master/lib)

Stores all the [Ant](http://ant.apache.org/) resources.

### [src/documents/](https://github.com/liferay/alloyui.com/blob/master/src/documents)

Contains all the pages of this website. Documentation is written in Markdown and examples in JavaScript.

### [src/files/](https://github.com/liferay/alloyui.com/tree/master/src/files)

Has all the images, CSS and JS files.

### [src/layouts/](https://github.com/liferay/alloyui.com/tree/master/src/layouts)

Contains some templates that are used in the application.

### [build.xml](https://github.com/liferay/alloyui.com/blob/master/build.xml)

Defines tasks for common steps.

### [docpad.coffee](https://github.com/liferay/alloyui.com/blob/master/docpad.coffee)

Stores most settings of the application.

### [package.json](https://github.com/liferay/alloyui.com/blob/master/package.json)

List NodeJS modules dependencies.

## Deploy

Just run `ant deploy` and then go to [alloyui.com](http://alloyui.com/).

## History

* v1.7.0 February 03, 2013
	* New website live in the official domain