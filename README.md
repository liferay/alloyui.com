# AlloyUI - Website

This is a working in progress of [AlloyUI's](https://github.com/liferay/alloy-ui/) website. Check the [Roadmap here](https://github.com/zenorocha/alloyui.com/wiki/Roadmap).

If you are having any problem with the library, please create an issue on [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## How it works?

We use [DocPad](https://github.com/bevry/docpad), a static generator in NodeJS.

## Getting started

1. [Install NodeJS](https://github.com/bevry/community/wiki/Installing-Node), if you don't have it yet.

2. Install DocPad globally:

		sudo npm install -fg docpad@6.8

3. Once NodeJS is installed, you just need to clone the project:

		git clone git@github.com:zenorocha/alloyui.com.git

4. Then go to the project's folder:

		cd alloyui.com

5. Install dependencies:

		ant install

6. And finally run:

		ant run

Now you can see the website running in `http://localhost:9778/` :D

## Deploy

Just run `sh publish.sh` and then go to [zenorocha.github.com/alloyui.com](http://zenorocha.github.com/alloyui.com/)