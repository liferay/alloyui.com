# Alloy UI - Website

This is the repository of AlloyUI's website. If you are having any problem with the library, please create an issue on [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## How it works?

We use [Jekyll](http://jekyllrb.com/), a static generator in Ruby.

## Getting started

[Install Ruby](http://www.ruby-lang.org/en/downloads/), if you don't have it yet.

Now, install [Jekyll](http://jekyllrb.com/) through this command:

	make install

Once Jekyll is installed, you just need to clone the project:

	git clone git@github.com:zenorocha/alloyui.com.git

Then go to the project's folder:

	cd alloyui.com

Initialize the submodule:

  git submodule update --init

And finally run:

	make run

Now you can see the website running in `localhost:4000/alloyui.com/` :D

## Deploy

* Run `make deploy` on the root folder.

Then you can see the website online at: `http://zenorocha.github.com/alloyui.com`