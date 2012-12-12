module.exports =

    # =================================
    # Template Data
    # These are variables will be accessible via our templates

    templateData:

        cdn: 'http://deploy.alloyui.com/build/aui/aui.js'

        # -----------------------------
        # Site Information

        site:

            # Site Production URL
            url: 'http://liferay.github.com/alloyui.com'
            assets: 'http://liferay.github.com/alloyui.com/website'

            # Site Description
            description: 'Alloy is a UI framework that provides a consistent and simple API for building high scalable applications across all three levels of the browser: structure, style and behavior.'

        # -----------------------------
        # Helpers

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
    # Environments

    environments:
        development:
            templateData:
                site:
                    url: 'http://localhost:9778'
                    assets: 'http://localhost:9778/website'
