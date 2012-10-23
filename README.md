# Alloy UI - Website

This is the repository of AlloyUI's website. If you are having any problem with the library, please create an issue on [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## How it works?

We use [DocPad](https://github.com/bevry/docpad), a static generator in NodeJS.

## Getting started

[Install NodeJS](https://github.com/bevry/community/wiki/Installing-Node), if you don't have it yet.

Install DocPad globally:

	sudo npm install -fg docpad@6.8

Once NodeJS is installed, you just need to clone the project:

	git clone git@github.com:zenorocha/alloyui.com.git

Then go to the project's folder:

	cd alloyui.com

Install dependencies:

	ant install

And finally run:

	ant run

Now you can see the website running in `http://localhost:9778/` :D

## Deploy

Just run `sh publish.sh` and then go to [zenorocha.github.com/alloyui.com](http://zenorocha.github.com/alloyui.com/)