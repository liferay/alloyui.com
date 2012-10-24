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

    # =================================
    # Environments

    environments:
        development:
            templateData:
                site:
                    url: 'http://localhost:9778'