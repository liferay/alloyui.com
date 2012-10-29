module.exports =

    # =================================
    # Template Data
    # These are variables will be accessible via our templates

    templateData:

        # -----------------------------
        # Site Information

        site:

            # Site Production URL
            url: 'http://zenorocha.github.com/alloyui.com'

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