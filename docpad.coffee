module.exports =

    # =================================
    # Template Data
    # These are variables will be accessible via our templates

    templateData:

        version: '2.0.0pr1'

        cdnDomain: 'http://cdn.alloyui.com/2.0.0pr1'
        cdn: 'http://cdn.alloyui.com/2.0.0pr1/aui/aui-min.js'
        download: 'http://cdn.alloyui.com/downloads/alloy-2.0.0pr1.zip'

        # -----------------------------
        # Site Information

        site:

            # Basic info
            title: 'AlloyUI'
            description: 'Alloy is a UI framework built on top of YUI3 that provides a simple API for building high scalable applications.'

            # Production URL
            url: 'http://zenorocha.github.com/alloyui.com'
            assets: 'http://zenorocha.github.com/alloyui.com/website'

        # -----------------------------
        # Helpers

        # Get the prepared site/document title
        # Often we would like to specify particular formatting to our page's title
        # we can apply that formatting here
        getPreparedTitle: ->
          # if we have a document title, then we should use that and suffix the site's title onto it
          if @document.title
            if @document.category
              "#{@document.category} - #{@document.title} | #{@site.title}"
            else
              "#{@document.title} | #{@site.title}"
          # if our document does not have it's own title, then we should just use the site's title
          else
            @site.title

        # Get the prepared site/document description
        getPreparedDescription: ->
          # if we have a document description, then we should use that, otherwise use the site's description
          @document.description or @site.description

        # Get the Absolute URL of a document
        getUrl: (document) ->
            return @site.url + (document.url or document.get?('url'))

        # Read File
        readFile: (relativePath) ->
            fsUtil = require('fs')
            path = @document.fullDirPath+'/'+relativePath
            result = fsUtil.readFileSync(path)
            if result instanceof Error
                throw result
            else
                return result.toString()

        # Code File
        codeFile: (relativePath,language) ->
            contents = @readFile(relativePath)
            return """<pre><code class="#{language}">#{contents}</code></pre>"""

    # =================================
    # Collections

    collections:

      # Get all tutorials sorted by alphabetical order
      tutorials: -> @getCollection("documents").findAllLive({url:$startsWith:'/tutorials'}, [title:1])

      # Get all examples sorted by alphabetical order
      examples: -> @getCollection("documents").findAllLive({url:$startsWith:'/examples'}, [category:1,title:1])


      featuring: (database) ->
        database.findAllLive({featuringOrder: $exists: true}, [featuringOrder:1])

    # =================================
    # Environments

    environments:
        development:
            templateData:
                site:
                    url: 'http://localhost:9778'
                    assets: 'http://localhost:9778/website'
