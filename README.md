# AlloyUI - Website

This is a working in progress of [AlloyUI's](https://github.com/liferay/alloy-ui/) website. Check the [Roadmap here](https://github.com/liferay/alloyui.com/wiki/Roadmap).

If you are having any problem with the library, please create an issue on [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## Table of contents

* [How it works?](#how-it-works)
* [Contribute](#contribute)
* [Getting started](#getting-started)
* [Structure](#structure)
* [Deploy](#deploy)

## How it works?

We use [DocPad](https://github.com/bevry/docpad), a static generator in NodeJS.

## Contribute

So do you want to help us? That's pretty awesome!

We are very happy to accept external contributions in the form of feedback, bug reports or pull requests :)

[Go ahead and read our guide](http://liferay.github.com/alloyui.com/contributing).

## Getting started

1. [Install NodeJS](https://github.com/bevry/community/wiki/Installing-Node), if you don't have it yet.

2. Install DocPad globally:

		sudo npm install -fg docpad@6.11

3. Once NodeJS is installed, you just need to clone the project:

		git clone git@github.com:liferay/alloyui.com.git

4. Then go to the project's folder:

		cd alloyui.com

5. And finally run:

		ant run

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

Just run `ant deploy` and then go to [liferay.github.com/alloyui.com](http://liferay.github.com/alloyui.com/).

