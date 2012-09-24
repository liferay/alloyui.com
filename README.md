# Alloy UI - Website

This is the repository of AlloyUI's website. If you are having any problem with the library, please create an issue on [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## How it works?

We use [Jekyll](http://jekyllrb.com/), a static generator in Ruby.

## Getting started

[Install Ruby](http://www.ruby-lang.org/en/downloads/), if you don't have it yet.

Now, the best way to install [Jekyll](http://jekyllrb.com/) is via [RubyGems](http://rubygems.org/):

	gem install jekyll

Once Jekyll is installed, you just need to clone the project:

	git clone git@github.com:liferay/alloyui.com.git

Then go to the project's folder:

	cd alloyui.com

And finally run:

	jekyll --server --auto

Now you can see the website running in `localhost:4000` :D

## Deploy

Github Pages don't host websites that use Jekyll with custom plugins. But it's easy to handle that, so if we're going to use any plugin:

* Run `./publish.sh` on the root folder.

If we're not, just send files to `gh-pages` branch:

	git push origin gh-pages